import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

interface TodoColumnTask {
  title: string;
  description: string;
  createdAt: string;
  deadLineAt: string;
}

interface TodoColumn {
  name: string;
  colors: string;
  tasks: [TodoColumnTask];
}

interface Todo {
  name: string;
  columns: [TodoColumn];
}

export default function TodoMain() {

  const [todo, setTodo] = useState<Todo[] | null>(null);
  const [load, setLoad] = useState<boolean>(false);

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
    <div>
      <button onClick={() => {create_todo()}}>Add todo</button>
      {
        todo?.map((e, key) => (
          <>{e.name}</>
        ))
      }
    </div>
  );
}
