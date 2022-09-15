import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHoursStringToMinutes } from './utils/convert-hours-string-to-minuts';
import { convertMinutesToStringHours } from './utils/convert-minutes-to-string-hours';

const app = express();

app.use(express.json());
app.use(cors());

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
app.get('/games/:id/ads', async(request, response) => {

    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return response.json(ads.map( ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToStringHours(ad.hourStart),
            hourEnd: convertMinutesToStringHours(ad.hourEnd),
        }
    }));

});

/* Retorna o nome do discord */
app.get('/ads/:id/discord', async (request, response) => {
    
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    });

    return response.json({
        discord: ad.discord,
    }).status(200);

});

/** Criando um Ad */
app.post('/games/:id/ad', async(request, response) => {

    /** Pegando o id informado no corpo da requisição */
    const gameId: string = request.params.id;

    const body: any = request.body;

    const date = Date.now();

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHoursStringToMinutes(body.hourStart),
            hourEnd: convertHoursStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        },
    });

    return response.json(ad).status(201);

});

app.listen(3333);
