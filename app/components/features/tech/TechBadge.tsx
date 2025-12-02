type TechBadgeProps = {
    children: string;
}

export default function TechBadge({children}: TechBadgeProps) {
    return (
        <span className="px-6 py-3 bg-sky-100 rounded-full text-sm shadow-sm">
            {children}
        </span>
    )
}