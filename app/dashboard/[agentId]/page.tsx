import { notFound } from "next/navigation";
import { AgentDetailView } from "@/components/AgentDetailView";

const agents = {
  "demo-agent": {
    id: "demo-agent",
    name: "New Demo Agent",
    status: "Active",
    totalCalls: "0",
    avgLeadScore: "—",
    conversionRate: "—",
    avgCallDuration: "—",
    scriptId: "cd_8701kbyj8c8zf4c8rz94j4ctfer9",
    description: "Your newly created agent will appear here with the details you entered on the setup form.",
    recentCalls: [
      ["Just now", "No calls yet", "—", "—", "Qualified"],
      ["Waiting", "Launch your first campaign", "—", "—", "Qualified"],
      ["Pending", "Calls will populate here", "—", "—", "Qualified"],
      ["Pending", "Lead outcomes will update live", "—", "—", "Qualified"],
      ["Pending", "Transfers and scores will appear here", "—", "—", "Qualified"],
    ],
    buckets: [
      ["0–20", 0],
      ["21–40", 0],
      ["41–60", 0],
      ["61–80", 0],
      ["81–100", 0],
    ],
  },
  "atlas-sdr": {
    id: "atlas-sdr",
    name: "Atlas SDR",
    status: "Active",
    totalCalls: "12,480",
    avgLeadScore: "89%",
    conversionRate: "34%",
    avgCallDuration: "4m 18s",
    scriptId: "cd_8701kbyj8c8zf4c8rz94j4ctfer9",
    description: "Qualifies inbound demo requests and routes hot leads to account executives.",
    recentCalls: [
      ["9:42 AM", "Sarah Chen", "4m 12s", "94%", "Qualified"],
      ["9:18 AM", "Marcus Reed", "2m 53s", "42%", "Not Interested"],
      ["8:57 AM", "Lina Patel", "5m 01s", "97%", "Transferred"],
      ["8:33 AM", "David Ross", "3m 18s", "81%", "Qualified"],
      ["8:10 AM", "Emma Lewis", "1m 47s", "28%", "Not Interested"],
    ],
    buckets: [
      ["0–20", 12],
      ["21–40", 24],
      ["41–60", 38],
      ["61–80", 74],
      ["81–100", 96],
    ],
  },
  "night-shift": {
    id: "night-shift",
    name: "Night Shift",
    status: "Paused",
    totalCalls: "8,912",
    avgLeadScore: "84%",
    conversionRate: "27%",
    avgCallDuration: "3m 49s",
    scriptId: "cd_8701kbyj8c8zf4c8rz94j4ctfer9",
    description: "Follows up with leads overnight so reps start the day with prioritized callbacks.",
    recentCalls: [
      ["11:20 PM", "Nora Bell", "4m 44s", "88%", "Qualified"],
      ["10:52 PM", "Chris Vale", "2m 03s", "39%", "Not Interested"],
      ["10:14 PM", "Priya Singh", "5m 09s", "91%", "Transferred"],
      ["9:41 PM", "Theo Martin", "3m 10s", "76%", "Qualified"],
      ["9:12 PM", "Anna Brooks", "2m 21s", "58%", "Qualified"],
    ],
    buckets: [
      ["0–20", 8],
      ["21–40", 18],
      ["41–60", 42],
      ["61–80", 66],
      ["81–100", 71],
    ],
  },
} as const;

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  const { agentId } = await params;
  const agent = agents[agentId as keyof typeof agents];

  if (!agent) {
    notFound();
  }

  return <AgentDetailView agent={agent} />;
}
