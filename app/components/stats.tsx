import { number } from "motion";

type Props = {
  better: number;
  symbol: string;
  desc: string;
};

export const Stat = ({ better, desc, symbol }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-bold text-black text-3xl font-bold">
          {better}
          <span className="text-black text-xl font-bold">{symbol}</span>
        </h1>
      </div>
      <div>
        <p className="text-neutral-600 text-sm font-semibold"> {desc}</p>
      </div>
    </div>
  );
};

export const StatsComp = () => {
  const stats = [
    { number: 3, desc: "Better leads", symbol: "x" },
    { number: 89, desc: "says it is like human", symbol: "%" },
    { number: 2.5, desc: "longer calls", symbol: "x" },
    { number: 4, desc: "more bookings", symbol: "x" },
  ];
  return (
    <div className="flex flex-row gap-6">
      {stats.map((each, idx) => (
        <Stat
          key={idx}
          better={each.number}
          desc={each.desc}
          symbol={each.symbol}
        />
      ))}
    </div>
  );
};
