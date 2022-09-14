import express from "express";
import { PrismaClient } from '@prisma/client';
//import { convertHoursStringToMinutes } from "./utils/convert-hour-string-to-minuts";

const app = express();

app.use(express.json);

const prisma = new PrismaClient();

app.get('/games', (request, response) => {

    const games = prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    });

    return response.send("oi").status(200);
});

app.get('/home', (req, res) => {
    return res.send('OK').status(200);
})

app.listen(3333);