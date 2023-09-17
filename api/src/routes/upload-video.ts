import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { fastifyMultipart } from '@fastify/multipart'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import fs from 'node:fs'

const pump = promisify(pipeline)

export async function uploadVodeo(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1048576 * 25 //25 mb
    }
  })
  app.post('/videos', async (req, res) => {
    const data = await req.file()
    if (!data) {
      return res.status(400).send({ error: 'Missing file input' })
    }
    const extension = path.extname(data.filename)
    if (extension !== '.mp3') {
      return res.status(400).send({ error: 'Invalid input type. Plaase upload a mp3' })
    }
    const fileBaseName = path.basename(data.filename, extension)
    const fileUploadName = `${fileBaseName}${randomUUID()}${extension}`
    const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

    await pump(data.file, fs.createWriteStream(uploadDestination));

    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: uploadDestination,
      }
    })
    return res.status(201).send({ video })
  })
}