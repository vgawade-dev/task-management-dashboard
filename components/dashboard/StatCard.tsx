
interface StatCardProps {
    title: string;
    value: number;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <dl className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm min-w-0">
            <dt className="text-sm text-slate-500">{title}</dt>
            <dd className="mt-2 text-2xl font-semibold text-slate-900" aria-live="polite">{value.toLocaleString()}</dd>
        </dl>
    );
}
