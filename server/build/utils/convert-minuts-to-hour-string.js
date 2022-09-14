"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutsToHourString = void 0;
function convertMinutsToHourString(minuts) {
    const hour = Math.floor(minuts / 60);
    const minutes = minuts % 60;
    return `${hour}:${minutes}`;
}
exports.convertMinutsToHourString = convertMinutsToHourString;
