import { Container } from "./components/container";
import { Hero } from "./components/hero";
import { NavigationBar } from "./components/navigation";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Container className="bg-white">
        <NavigationBar />
        <Hero />
      </Container>
    </div>
  );
}
