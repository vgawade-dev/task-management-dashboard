
interface StatCardProps {
    title: string;
    value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-500">{title}</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{value.toLocaleString()}</div>
        </div>
    );
}
