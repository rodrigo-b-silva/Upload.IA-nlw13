import { Textarea } from "./ui/textarea";

export function Main() {
  return (
    <div className='flex-1 flex flex-col gap-4'>
      <div className='grid grid-rows-2 gap-4 flex-1'>
        <Textarea
          className='resize-none p-4 leading-relaxed'
          placeholder='Inclua o prompt para a IA...'
        />
        <Textarea
          className='resize-none p-4 leading-relaxed'
          placeholder='Resultado gerado pela IA...'
          readOnly
        />
      </div>
      <p className='text-sm text-muted-foreground'>
        Lembre-se: você pode utilizar a variável <code className='text-green-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
      </p>
    </div>
  )
}