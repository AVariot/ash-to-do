import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import TodoTab from "../components/todoTab";

interface TodoColumnTask {
  title: string;
  description: string;
  createdAt: string;
  deadLineAt: string;
  color: string;
}

interface TodoColumn {
  name: string;
  color: string;
  tasks: [TodoColumnTask];
}

interface Todo {
  name: string;
  columns: [TodoColumn];
}

export default function TodoMain() {

  const [todo, setTodo] = useState<Todo[] | null>(null);
  const [load, setLoad] = useState<boolean>(false);
  const [todoKey, setTodoKey] = useState<number>(0)

  useEffect(() => {
    (async () => {
      console.log("fetching todos...");
      try {
        const todos = await invoke<Todo[]>("get_all_todo");
        console.log("todos:", todos);
        setTodo(todos);
      } catch (e) {
        console.error("error:", e);
      }
      setLoad(false);
    })();
  }, [load])

  async function create_todo() {
    const todos = await invoke<Todo>("create_todo", { name: './todo.json' });
    setLoad(true);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-2">
        <button onClick={() => {create_todo()}}>Add todo</button>
      </div>
      <div className="flex-1">
        {
          todo?.map((e, key) => (
            <button key={key}>{e.name}</button>
          ))
        }
      </div>
      <div className="flex-20">
        {
          todo != null && todo?.[todoKey] && <TodoTab {...todo[todoKey]} />
        }
      </div>
    </div>
  );
}
