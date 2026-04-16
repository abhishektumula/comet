import { IconCheck } from "@tabler/icons-react";

export function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-6 ${
        featured
          ? "bg-zinc-900 text-white ring-1 ring-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-200"
          : "bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
      }`}
    >
      <p
        className={`text-sm font-medium ${
          featured ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-500 dark:text-zinc-400"
        }`}
      >
        {name}
      </p>
      <div className="mt-4 text-4xl font-semibold tracking-tight">{price}</div>
      <p
        className={`mt-3 text-sm leading-6 ${
          featured ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-500 dark:text-zinc-400"
        }`}
      >
        {description}
      </p>
      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm">
            <IconCheck size={18} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <a
        href="/new-agent"
        className={`mt-8 inline-flex rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
          featured
            ? "bg-white text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        }`}
      >
        Choose plan
      </a>
    </div>
  );
}
