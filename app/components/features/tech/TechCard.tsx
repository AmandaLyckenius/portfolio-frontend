import type { ReactNode } from "react"

type TechCardProps = {
    title: string
    icon?: ReactNode
    children: ReactNode
}

export default function TechCard({title, icon, children}: TechCardProps){
    return (
    <div>

        <div>
            {icon &&
            <div className="">{icon}</div>}

            <h3>{title}</h3>
        </div>

        <p>{children}</p>

    </div>
    )
}