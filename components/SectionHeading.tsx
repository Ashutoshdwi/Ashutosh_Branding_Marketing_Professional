export default function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-10 md:mb-14 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-3">
                {eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight gradient-text">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-white/65 text-base md:text-lg leading-7">
                    {description}
                </p>
            )}
        </div>
    );
}