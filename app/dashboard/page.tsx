import { Container } from "../components/container";
import {
  DashboardNavigationBar,
  NavigationBar,
} from "../components/navigation";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Container className="text-black">
        <DashboardNavigationBar />
        <div className="h-[50vh] w-full flex flex-col justify-center items-center gap-3">
          <IconPhone color="black" size={32} />
          <h1 className="text-2xl text-neutral-800 font-bold">
            No Voice Agents yet
          </h1>
          <h2 className="text-md text-neutral-600">
            Crete your first AI Voice agent
          </h2>
          <div>
            <Link href="/new-agent">
              <button className="bg-black px-8 py-4 mt-6 rounded-4xl">
                Crete and Deploy your first agent
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
