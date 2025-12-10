import type { ReactNode } from "react"

type TechCardProps = {
    title: string
    icon?: ReactNode
    children: ReactNode
}

export default function TechCard({title, icon, children}: TechCardProps){
    return (
    <div>

        <div className=" flex items-end gap-3">
            

            <h3 className="font-semibold text-lg">{title}</h3>

            {icon &&
            <div>{icon}</div>}
        </div>

        <p className="mt-3">{children}</p>

    </div>
    )
}