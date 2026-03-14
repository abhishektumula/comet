import { LandingHero } from "./components/landing-hero";
import { LandingNavigation } from "./components/landing-navigation";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-white"
      style={{ fontFamily: '"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <div className="mx-auto w-[92%] max-w-[1180px] bg-white">
        <LandingNavigation />
        <LandingHero />
      </div>
    </div>
  );
}
