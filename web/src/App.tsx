import { ThemeProvider } from "@/layout/theme-provider"
import { Header } from "./components/header";
import { Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';
import { VideoInputForm } from './components/video-input-form';
import { PromptSelect } from './components/prompt-select';
import { useState } from "react";
import { useCompletion } from 'ai/react'

export function App() {
  const apiUrl = import.meta.env.VITE_API_URL
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: `${apiUrl}/ai/complete`,
    body: {
      videoId,
      temperature
    },
    headers: {
      'Content-type': 'application/json'
    }
  })

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1 p-6 gap-6 md:flex'>
          <div className='w-auto mb-4 flex flex-col gap-4 md:flex-1'>
            <div className='grid grid-rows-2 gap-4 flex-1'>
              <Textarea
                className='resize-none p-4 leading-relaxed'
                placeholder='Inclua o prompt para a IA...'
                value={input}
                onChange={handleInputChange}
              />
              <Textarea
                className='resize-none p-4 leading-relaxed'
                placeholder='Resultado gerado pela IA...'
                readOnly
                value={completion}
              />
            </div>
            <p className='text-sm text-muted-foreground'>
              Lembre-se: você pode utilizar a variável <code className='text-green-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
            </p>
          </div>
          <aside className='w-auto space-y-6 md:w-80'>
            <VideoInputForm onVideoUploaded={setVideoId} />
            <Separator />

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='space-y-2'>
                <Label>Prompt</Label>
                <PromptSelect onPromptSelected={setInput} />
              </div>

              <div className='space-y-2'>
                <Label>Modelo</Label>
                <Select disabled defaultValue='gpt3.5'>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className='block text-xs text-muted-foreground italic'>
                  Você poderá customizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className='space-y-4'>
                <Label>Tempatura</Label>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  value={[temperature]}
                  onValueChange={value => setTemperature(value[0])}
                />
                <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                  Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                </span>
              </div>

              <Separator />

              <Button disabled={isLoading} type="submit" className='w-full'>
                Executar
                <Wand2 className='w-4 h-4 ml-2' />
              </Button>
            </form>

          </aside>
        </div>
      </div>
    </ThemeProvider>
  )
}