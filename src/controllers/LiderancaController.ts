import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async list(req: Request, res: Response) {
        // #swagger.tags = ['Lideranca']
        // #swagger.description = 'Obter a liderança cadastrada.'
        return await prisma.lideranca.findMany()
            .then((lideranca) => res.status(200).send(lideranca))
            .catch((error) => res.status(500).json({ error: error }));
    },


    async listOne(req: Request, res: Response) {
        // #swagger.tags = ['Lideranca']
        // #swagger.description = 'Obter uma liderança específica pelo id.'
        const { id } = req.params;

        return await prisma.lideranca.findUnique({
            where: {
                id_lideranca: Number(id),
            },
        })
            .then((lideranca) => res.status(200).send(lideranca))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async create(req: Request, res: Response) {
        // #swagger.tags = ['Lideranca']
        // #swagger.description = 'Cadastrar uma liderança nova.'
        const {nome, nome_usuario, senha, id_clube, id_cargo} = req.body;

        let clube;

        if (id_clube) {
            clube = {
                connect: { id_clube: Number(id_clube) }
            }
        }

        return await prisma.lideranca.create({
            data: {

                nome,
                nome_usuario,
                senha,
                clube,
                cargo: {
                    connect: { id_cargo: Number(id_cargo) }
                }
            },
        })
            .then((lideranca) => res.status(201).send(lideranca))
            .catch((error) => res.status(500).json({ error: error }));
    }

}