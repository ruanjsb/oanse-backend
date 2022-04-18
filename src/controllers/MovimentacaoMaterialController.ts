import { Request, response, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async list(req: Request, res: Response) {
        // #swagger.tags = ['Movimentação de Material']
        // #swagger.description = 'Obter as movimentações de materiais cadastrados.'
        return await prisma.movimentacao_material.findMany()
            .then((movimentacoes_material) => res.status(200).send(movimentacoes_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async listOne(req: Request, res: Response) {
        // #swagger.tags = ['Movimentação de Material']
        // #swagger.description = 'Obter uma movimentação de material específica pelo id.'
        const { id } = req.params;

        return await prisma.movimentacao_material.findUnique({
            where: {
                id_movimentacao_material: Number(id),
            },
        })
            .then((movimentacao_material) => res.status(200).send(movimentacao_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

    async create(req: Request, res: Response) {
        // #swagger.tags = ['Movimentação de Material']
        // #swagger.description = 'Cadastrar uma movimentação de material.'
        const { data, material_id_material, id_lideranca_responsavel, id_lideranca_solicitante, tipo, id_oansista, quantidade } = req.body;

        let lideranca_liderancaTomovimentacao_material_id_lideranca_solicitante;
        let oansista;

        if (id_lideranca_solicitante) {
            lideranca_liderancaTomovimentacao_material_id_lideranca_solicitante = {
                
                connect: {id_lideranca: Number(id_lideranca_responsavel)}
            }
        }

        if (id_oansista) {
            oansista = {
                connect: { id_oansista: Number(id_oansista) }
            }
        }

        return await prisma.movimentacao_material.create({
            data: {

                data,
                material: {
                    connect: { id_material: Number(material_id_material) }
                },
                lideranca_liderancaTomovimentacao_material_id_lideranca_responsavel: {
                    connect: {id_lideranca: Number(id_lideranca_responsavel)}
                },
                lideranca_liderancaTomovimentacao_material_id_lideranca_solicitante,
                tipo,
                oansista,
                quantidade
            },
        })
            .then((movimentacao_material) => res.status(201).send(movimentacao_material))
            .catch((error) => res.status(500).json({ error: error }));
    },

}