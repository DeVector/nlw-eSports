import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

/** Retorna todos os games */
app.get('/games', async (request, response) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return response.json(games);

});

/** Retorna os Ads de cada game */
app.get('/games/:id/ads', (request, response) => {

});

/* Retorna o nome do discord */
app.get('ads/:id/discord', (request, response) => {
    
});

/** Criando um Ad */
app.post('games/:id/ad', (request, response) => {

    /** Pegando o id informado no corpo da requisição */
    const gameId = request.params.id;

    return response.json();

});

app.listen(3333);