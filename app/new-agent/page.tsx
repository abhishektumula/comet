import { Container } from "../components/container";
import MultiStepForm from "../components/multiform";

export default function FormPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Container className="">
        <MultiStepForm />
      </Container>
    </div>
  );
}
