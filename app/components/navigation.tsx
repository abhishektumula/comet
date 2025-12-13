import Link from "next/link";

export const KalDock = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
};

export const DashboardNavigationBar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-6 shadow-sm/10 rounded-xl">
      <Link href="/">
        <div className="text-neutral-900 hover:text-black transition text duration-300">
          <span className="flex flex-row gap-2">
            <KalDock />
            KalDock
          </span>
        </div>
      </Link>
      <div className=""></div>
    </div>
  );
};

export const NavigationBar = () => {
  const refs = [
    { title: "Feature", href: "/" },
    { title: "Pricing", href: "/" },
    { title: "chat", href: "/chat" },
    { title: "API", href: "/" },
  ];
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="text-neutral-900 hover:text-black transition text duration-300">
        <span className="flex flex-row gap-2">
          <KalDock />
          KalDock
        </span>
      </div>
      <div className="flex flex-row gap-8">
        {refs.map((each, idx) => (
          <div key={each.title} className="text-neutral-800 text-lg">
            <Link href={each.href}>{each.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="/dashboard">
          <button className="px-8 py-2 bg-neutral-800 text-neutral-200 rounded-xl">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};
