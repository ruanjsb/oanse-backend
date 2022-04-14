import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async list(req: Request, res: Response) {
        // #swagger.tags = ['Material']
        // #swagger.description = 'Obter os materiais cadastrados.'
        return await prisma.material.findMany()
            .then((materiais) => res.status(200).send(materiais))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async listOne(req: Request, res: Response) {
        // #swagger.tags = ['Material']
        // #swagger.description = 'Obter um material específico pelo id.'
        const { id } = req.params;

        return await prisma.material.findUnique({
            where: {
                id_material: Number(id),
            },
        })
            .then((material) => res.status(200).send(material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async create(req: Request, res: Response) {
        // #swagger.tags = ['Material']
        // #swagger.description = 'Cadastrar um material novo.'
        const { nome, descricao, id_tipo_material, clube_id_clube, estoque, id_premio } = req.body;

        let clube;
        let premio;

        if (clube_id_clube) {
            clube = {
                connect: { id_clube: Number(clube_id_clube) }
            }
        }

        if (id_premio) {
            premio = {
                connect: { id_premio: Number(id_premio) }
            }
        }

        return await prisma.material.create({
            data: {

                nome,
                descricao,
                tipo_material: {
                    connect: { id_tipo_material: Number(id_tipo_material) }
                },
                clube,
                estoque,
                premio
            },
        })
            .then((material) => res.status(201).send(material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async update(req: Request, res: Response) {
        // #swagger.tags = ['Material']
        // #swagger.description = 'Atualizar um material específico pelo id.'
        const { id } = req.params;
        const { nome, descricao, id_tipo_material, clube_id_clube, estoque, id_premio } = req.body;

        let tipo_material;
        let clube;
        let premio;

        if (id_tipo_material) {
            tipo_material = {
                connect: { id_tipo_material: Number(id_tipo_material) }
            }
        }

        if (clube_id_clube) {
            clube = {
                connect: { id_clube: Number(clube_id_clube) }
            }
        }

        if (id_premio) {
            premio = {
                connect: { id_premio: Number(id_premio) }
            }
        }

        return await prisma.material.update({
            where: {
                id_material: Number(id),
            },
            data: {
                nome,
                descricao,
                tipo_material,
                clube,
                estoque,
                premio
            },
        })
            .then((material) => res.status(200).send(material))
            .catch((error) => res.status(500).json({ message: "Erro ao atualizar.", error: error }));
    },

    async delete(req: Request, res: Response) {
        // #swagger.tags = ['Material']
        // #swagger.description = 'Deletar um material específico pelo id.'
        const { id } = req.params;

        return await prisma.material.delete({
            where: {
                id_material: Number(id),
            },
        })
            .then((_) => res.status(200).send({ result: true }))
            .catch((error) => res.status(500).json({ error: error }));
    },
}