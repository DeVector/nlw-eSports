
export function convertMinutsToHourString(minuts: number) {
    const hour = Math.floor(minuts / 60);

    const minutes = minuts % 60;

    return `${hour}:${minutes}`;
}