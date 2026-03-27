export default function StatCard({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="card-dark p-6 md:p-8">
            <div className="text-3xl md:text-5xl font-bold">{value}</div>
            <div className="mt-3 text-white/60">{label}</div>
        </div>
    );
}