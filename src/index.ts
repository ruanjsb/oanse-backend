import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/cargo`, async (req, res) => {
  const { id_cargo, nome, descricao } = req.body
  const result = await prisma.cargo.create({
    data: {
      id_cargo,
      nome,
      descricao,
    },
  })
  res.json(result)
})

app.get('/cargo', async (req, res) => {
  const users = await prisma.cargo.findMany()
  res.json(users)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)