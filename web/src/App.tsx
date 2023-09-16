import { ThemeProvider } from "@/layout/theme-provider"
import { Aside } from "./components/aside";
import { Main } from "./components/main";
import { Header } from "./components/header";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1 p-6 flex gap-6'>
          <Main />
          <Aside />
        </div>
      </div>
    </ThemeProvider>
  )
}