import 'dotenv/config'
import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVodeo } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'
import { generateAIComplete } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPrompts)
app.register(uploadVodeo)
app.register(createTranscription)
app.register(generateAIComplete)

const PORT = Number(process.env.PORT)
app.listen({
  port: PORT,
  host: "0.0.0.0"
}).then(() => {
  console.log(`🚀 HTTP running on port ${PORT}`)
})