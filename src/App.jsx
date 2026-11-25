import { Hero } from "./components/Hero";
import { AboutAndGithub } from "./sections/AboutAndGithub";

export default function App() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Hero />
      <AboutAndGithub />
    </main>
  );
}