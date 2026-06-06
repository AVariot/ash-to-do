
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

export default function TodoTab(todo: Todo) {
    if (!todo?.columns) {
        return <div className="h-full flex items-center justify-center text-gray-400">No columns found.</div>;
    }

    return (
        <div className="h-full flex flex-row gap-5">
            {
                todo.columns.map((e, key) => (
                    <div key={key} className={`rounded-2xl p-2 h-full ${e.color} w-[25%] flex flex-col`}>
                        <div className="flex-1 flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                {e.name}
                            </div>
                        </div>
                        <div className="flex-17 p-2">
                            {
                                e.tasks.map((ee, keykey) => (
                                    <div key={keykey} className={`${ee.color} p-2 rounded-2xl`}>
                                        <div>
                                            {ee.title}
                                        </div>
                                        <div>
                                            {ee.description}
                                        </div>
                                        <div>
                                            {ee.deadLineAt}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
