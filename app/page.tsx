import { HeroSection } from "./components/sections/Hero";
import { LivePreviewSection } from "./components/sections/LivePreview";
import { ComponentsGridSection } from "./components/sections/ComponentsGrid";
import { FeaturesSection } from "./components/sections/Features";
import { WorkflowSection } from "./components/sections/Workflow";
import { UseCasesSection } from "./components/sections/UseCases";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      {/* <LivePreviewSection /> */}
      <ComponentsGridSection />
      <FeaturesSection />
      <UseCasesSection />
      <WorkflowSection />
    </div>
  );
}
