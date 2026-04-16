export function StatBlock({
  label,
  value,
  bordered = false,
}: {
  label: string;
  value: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`py-2 ${bordered ? "md:border-r md:border-zinc-200 md:pr-8 dark:md:border-zinc-800" : ""}`}
    >
      <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
      <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}
