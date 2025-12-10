import type { ReactNode } from "react"

type TechCardProps = {
    title: string
    icon?: ReactNode
    children: ReactNode
}

export default function TechCard({title, icon, children}: TechCardProps){
    return (
    <div className="bg-brand-surface">

        <div className=" flex items-end gap-3 text-brand-accent">
            

            <h3 className="font-semibold text-xl text-brand-text">{title}</h3>

            {icon &&
            <div>{icon}</div>}
        </div>

        <p className="mt-3 text-base leading-relaxed text-brand-muted">{children}</p>

    </div>
    )
}