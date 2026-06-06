import { LucideIcon, CheckSquare, Calendar } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {

    const [selected, setSelected] = useState<number>(0);

    function Button({ label, icon: Icon, onClick, slt }: { label: string, icon: LucideIcon, onClick: () => void, slt: boolean }) {
        return <button className={`flex justify-start items-center p-4 border-none ${slt ? 'bg-(--color-surface-elevated)' : '' } hover:bg-(--color-surface-elevated) gap-2 rounded-2xl`} onClick={onClick}>
            <Icon size={16} />
            { label }
        </button>
    }

    return <div className="w-full h-full bg-(--color-surface) flex flex-col">
        <div className="flex-1 flex justify-center items-center">
            <h1 className="font-bold text-2xl">
                Ash ToDo
            </h1>
        </div>
        <div className="flex-7 flex flex-col p-3 gap-2">
            <Button label={"Todo"} icon={CheckSquare} onClick={() => {setSelected(0)}} slt={selected == 0} />
            <Button label={"Calendar"} icon={Calendar} onClick={() => {setSelected(1)}} slt={selected == 1} />
        </div>
        <div className="flex-1">
        </div>
    </div>
}
