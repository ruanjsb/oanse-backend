import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async index(req: Request, res: Response) {
        const users = await prisma.cargo.findMany();
        res.json(users);
    },

    async insert(req: Request, res: Response) {
        const { nome, descricao } = req.body
        const result = await prisma.cargo.create({
          data: {
            nome,
            descricao,
          },
        });
        res.json(result);
    }
}