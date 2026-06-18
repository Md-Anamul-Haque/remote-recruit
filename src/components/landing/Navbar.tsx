import { Button } from "@/components/ui/button";
import { Logo } from "../icons/SocialIcons";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="RemoteRecruit home">
          <Logo />

        </a>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            Sign In
          </Button>
          <Button className="bg-sky-400 text-blue-950 hover:bg-sky-300">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
}
