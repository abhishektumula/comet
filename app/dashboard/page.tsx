import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";
import { Container } from "../components/container";
import { DashboardNavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

export default function Dashboard() {
  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      <WidgetScript />
      <Container>
        <DashboardNavigationBar />

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="section-frame p-6">
            <h2 className="text-sm text-neutral-500">Active Agents</h2>
            <p className="mt-2 text-4xl font-bold">3</p>
          </div>
          <div className="section-frame p-6">
            <h2 className="text-sm text-neutral-500">Calls Today</h2>
            <p className="mt-2 text-4xl font-bold">74</p>
          </div>
          <div className="section-frame p-6">
            <h2 className="text-sm text-neutral-500">Success Rate</h2>
            <p className="mt-2 text-4xl font-bold">92%</p>
          </div>
        </div>

        <div className="section-frame mt-6 flex min-h-[42vh] flex-col items-center justify-center gap-3 p-8 text-center">
          <IconPhone color="black" size={34} />
          <h1 className="text-3xl font-bold text-neutral-900">Manage your voice agents</h1>
          <p className="max-w-xl text-neutral-600">
            Build, test, and deploy production-grade AI voice agents from one dashboard.
          </p>
          <Link href="/new-agent">
            <button className="mt-4 rounded-xl bg-black px-8 py-3 text-white transition hover:bg-neutral-800">
              Create and Deploy Agent
            </button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
