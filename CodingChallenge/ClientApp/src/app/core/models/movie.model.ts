export class Movie {
    /**
     *
     */
    constructor() {
        this.id = -1;
        this.rating = 0;
        this.year = -1;
        this.title = '';
        this.franchise = '';
    }
    id: number;
    title: string;
    year: number;
    rating: number;
    franchise: string;
}