"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { convertHoursStringToMinutes } from "./utils/convert-hour-string-to-minuts";
const app = (0, express_1.default)();
app.use(express_1.default.json);
/** Listando todos os games*/
app.listen(3333);
