import { LandingHero } from "./components/landing-hero";
import { LandingNavigation } from "./components/landing-navigation";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="mx-auto w-[70%] bg-white">
        <LandingNavigation />
        <LandingHero />
      </div>
    </div>
  );
}
