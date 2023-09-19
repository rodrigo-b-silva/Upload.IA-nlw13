import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import imgLogo from '@/assets/logo_upload_ai.png'

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold flex items-center gap-3">
        <img src={imgLogo} className="w-12 h-12" />
        Upload.AI
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground hidden md:block">
          Desenvolvido com 💚 por RodrigoDev
        </span>
        <Separator orientation='vertical' className='h-6' />
        <ThemeToggle />
        <Button variant="outline">
          <Github className="w-4 h-4 mr-2" />
          <a href="https://github.com/rodrigo-b-silva" target="_blank">Github</a>
        </Button>
      </div>
    </header>
  )
}