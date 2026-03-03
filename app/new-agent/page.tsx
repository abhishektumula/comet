import { Container } from "../components/container";
import MultiStepForm from "../components/multiform";
import { NavigationBar } from "../components/navigation";
import { WidgetScript } from "../components/widget-script";

export default function FormPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <WidgetScript />
      <Container>
        <NavigationBar />
        <MultiStepForm />
      </Container>
    </main>
  );
}
