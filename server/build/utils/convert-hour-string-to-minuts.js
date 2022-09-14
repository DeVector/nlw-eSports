"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHoursStringToMinutes = void 0;
function convertHoursStringToMinutes(hourString) {
    const [hour, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hour * 60) + minutes;
    return minutesAmount;
}
exports.convertHoursStringToMinutes = convertHoursStringToMinutes;
