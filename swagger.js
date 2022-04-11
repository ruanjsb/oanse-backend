const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./src/app.ts']

const doc = {
    info: {
        version: "1.0.0",
        title: "API do Oanse",
        description: "Documentação gerada automaticamente pelo módulo <b>swagger-autogen</b>."
    },
    host: "localhost:3020"
}

swaggerAutogen(outputFile, endpointsFiles, doc)
