import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async list(req: Request, res: Response) {
    // #swagger.tags = ['Cargo']
    // #swagger.description = 'Obter os cargos cadastrados.'
    return await prisma.cargo.findMany()
      .then((cargos) => res.status(200).send(cargos))
      .catch((error) => res.status(500).json({ error: error }));
  },

  async listOne(req: Request, res: Response) {
    // #swagger.tags = ['Cargo']
    // #swagger.description = 'Obter um cargo específico pelo id.'
    const { id } = req.params;

    return await prisma.cargo.findUnique({
      where: {
        id_cargo: Number(id),
      },
    })
      .then((cargo) => res.status(200).send(cargo))
      .catch((error) => res.status(500).json({ error: error }));
  },

  async create(req: Request, res: Response) {
    // #swagger.tags = ['Cargo']
    // #swagger.description = 'Cadastrar um cargo novo.'
    const { nome, descricao } = req.body;
    return await prisma.cargo.create({
      data: {
        nome,
        descricao,
      },
    })
      .then((cargo) => res.status(201).send(cargo))
      .catch((error) => res.status(500).json({ error: error }));
  },

  async delete(req: Request, res: Response) {
    // #swagger.tags = ['Cargo']
    // #swagger.description = 'Deletar um cargo específico pelo id.'
    const { id } = req.params;

    return await prisma.cargo.delete({
      where: {
        id_cargo: Number(id),
      },
    })
      .then((_) => res.status(200).send({ result: true }))
      .catch((error) => res.status(500).json({ error: error }));
  },

}