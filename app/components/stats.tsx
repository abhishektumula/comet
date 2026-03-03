type StatProps = {
  value: string;
  desc: string;
};

const Stat = ({ value, desc }: StatProps) => {
  return (
    <div className="rounded-2xl border border-[rgba(15,17,19,0.16)] p-4">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-[var(--ink-600)]">{desc}</p>
    </div>
  );
};

export const StatsComp = () => {
  const stats = [
    { value: "3x", desc: "better leads" },
    { value: "89%", desc: "human-like quality" },
    { value: "2.5x", desc: "longer calls" },
    { value: "4x", desc: "more bookings" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((entry) => (
        <Stat key={entry.desc} value={entry.value} desc={entry.desc} />
      ))}
    </div>
  );
};
