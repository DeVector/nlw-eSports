import express from 'express';

const app = express();

/** Retorna todos os games */
app.get('/games', (request, response) => {

    return response.json([]);

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