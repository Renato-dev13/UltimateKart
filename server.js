const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

async function testarBanco() {
    try {
        const pilotos = await prisma.piloto.findMany();
        console.log('✅ Conectado ao PostgreSQL! Pilotos cadastrados:', pilotos);
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco:', error);
    }
}

testarBanco();

app.get('/', (req, res) => {
    res.send('UltimateKart API está rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
