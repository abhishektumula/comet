import Link from "next/link";

const KalDock = () => {
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

export const LandingNavigation = () => {
  const refs = [
    { title: "Feature", href: "/" },
    { title: "Pricing", href: "/" },
    { title: "Chat", href: "/chat" },
    { title: "API", href: "/" },
  ];

  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="text-neutral-900 transition duration-300 hover:text-black">
        <span className="flex flex-row gap-2">
          <KalDock />
          KalDock
        </span>
      </div>

      <div className="flex flex-row gap-8">
        {refs.map((each) => (
          <div key={each.title} className="text-lg text-neutral-800">
            <Link href={each.href}>{each.title}</Link>
          </div>
        ))}
      </div>

      <div>
        <Link href="/dashboard">
          <button className="rounded-xl bg-neutral-800 px-8 py-2 text-neutral-200">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};
