import { TipCalculator } from "@/components/tip-calculator";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold font-headline tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          TipSplit
        </h1>
        <p className="text-muted-foreground mt-2">
          Effortlessly calculate tips and split bills with friends.
        </p>
      </div>
      
      <TipCalculator />

      <footer className="mt-12 text-center text-muted-foreground text-sm">
        <p>Built with ❤️ by a Senior Engineer.</p>
        <a 
          href="https://github.com/firebase/firebase-genkit-nextjs-starter" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 hover:text-foreground transition-colors mt-2"
        >
          <Github size={16} />
          View on GitHub
        </a>
      </footer>
    </main>
  );
}
