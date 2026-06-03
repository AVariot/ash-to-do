import { LucideIcon, CheckSquare } from "lucide-react"

export default function Sidebar() {

    function Button({ label, icon: Icon, onClick }: { label: string, icon: LucideIcon, onClick: () => void }) {
        return <button className="flex justify-start items-center p-2 border-none hover:bg-(--color-surface-elevated)" onClick={onClick}>
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
        <div className="flex-7 flex flex-col">
            <Button label={"Todo"} icon={CheckSquare} onClick={() => {}} />
        </div>
        <div className="flex-1">
        </div>
    </div>
}
