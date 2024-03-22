export namespace RandUtil {

    export function getRandElements<T>(list: T[]): T[] {
        const min = getRandomArbitrary(0, list.length - Math.min(list.length, 8));
        const size = getRandomArbitrary(Math.min(list.length, 2), Math.min(list.length, 8));
        return list.slice(min, size);
    }
    export function getRandElement<T>(list: T[]): T {
        const index = getRandomArbitrary(0, list.length - 1);
        return list[index];
    }

    export function getRandomArbitrary(min: any, max: any) {
        return Math.round(Math.random() * (max - min) + min);
    }

    export function randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}
