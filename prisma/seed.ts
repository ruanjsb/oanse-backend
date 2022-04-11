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
    })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
});