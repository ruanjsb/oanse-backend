import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async list(req: Request, res: Response) {
        // #swagger.tags = ['Tipo Material']
        // #swagger.description = 'Obter os tipos de materiais cadastrados.'
        return await prisma.tipo_material.findMany()
            .then((tipos_material) => res.status(200).send(tipos_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async listOne(req: Request, res: Response) {
        // #swagger.tags = ['Tipo Material']
        // #swagger.description = 'Obter um tipo de material específico pelo id.'
        const { id } = req.params;

        return await prisma.tipo_material.findUnique({
            where: {
                id_tipo_material: Number(id),
            },
        })
            .then((tipo_material) => res.status(200).send(tipo_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async update(req: Request, res: Response) {
        // #swagger.tags = ['Tipo Material']
        // #swagger.description = 'Editar um tipo de material específico pelo id.'
        const { id } = req.params;
        const { nome } = req.body;
    
        return await prisma.tipo_material.update({
          where: {
            id_tipo_material: Number(id),
          },
          data: {
            nome: nome || undefined,
          }
        })
          .then((tipo_material) => res.status(200).send(tipo_material))
          .catch((error) => res.status(500).json({ error: error }));
      },

    async create(req: Request, res: Response) {
        // #swagger.tags = ['Tipo Material']
        // #swagger.description = 'Cadastrar um tipo novo de material.'
        const { nome } = req.body;

        return await prisma.tipo_material.create({
            data: {
                nome,
            },
        })
            .then((tipo_material) => res.status(201).send(tipo_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async delete(req: Request, res: Response) {
        // #swagger.tags = [''Tipo Material']
        // #swagger.description = 'Deletar um tipo de material específico pelo id.'
        const { id } = req.params;
    
        return await prisma.tipo_material.delete({
          where: {
            id_tipo_material: Number(id),
          },
        })
          .then((_) => res.status(200).send({ result: true }))
          .catch((error) => res.status(500).json({ error: error }));
      },
}