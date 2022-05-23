import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const lider = await prisma.cargo.upsert({
        where: {id_cargo: 1},
        update: {},
        create: {
            nome: "Líder",
            descricao: "Orienta os Oansistas."
        }
    });

    const diretorClube = await prisma.cargo.upsert({
        where: {id_cargo: 2},
        update: {},
        create: {
            nome: "Diretor de Clube",
            descricao: "Orienta os Líderes."
        }
    });

    const diretorOanse = await prisma.cargo.upsert({
        where: {id_cargo: 3},
        update: {},
        create: {
            nome: "Diretor do Oanse",
            descricao: "Orienta os diretores de clube."
        }
    });

    const Secretario = await prisma.cargo.upsert({
        where: {id_cargo: 4},
        update: {},
        create: {
            nome: "Secretário",
            descricao: "Gerencia os registros e materiais do clube."
        }
    });

    const clubeUrsinhos = await prisma.clube.upsert({
        where: {id_clube: 1},
        update: {},
        create: {
            nome: "Ursinhos",
            idade_entrada: 4,
            idade_saida: 5
        }
    });

    const clubeFaiscas = await prisma.clube.upsert({
        where: {id_clube: 2},
        update: {},
        create: {
            nome: "Faíscas",
            idade_entrada: 6,
            idade_saida: 8
        }
    });

    const clubeFlama = await prisma.clube.upsert({
        where: {id_clube: 3},
        update: {},
        create: {
            nome: "Flama",
            idade_entrada: 9,
            idade_saida: 10
        }
    });

    const clubeTocha = await prisma.clube.upsert({
        where: {id_clube: 4},
        update: {},
        create: {
            nome: "Tocha",
            idade_entrada: 11,
            idade_saida: 12
        }
    });

    const clubeJV = await prisma.clube.upsert({
        where: {id_clube: 5},
        update: {},
        create: {
            nome: "JV",
            idade_entrada: 13,
            idade_saida: 14
        }
    });

    const clubeVQ7= await prisma.clube.upsert({
        where: {id_clube: 6},
        update: {},
        create: {
            nome: "VQ7",
            idade_entrada: 15,
            idade_saida: 17
        }
    });

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
});