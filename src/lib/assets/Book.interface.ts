export interface Book {
    id: number;
    title: string;
    author: string;
    coverSrc: string;
    year: string;
    genre: string,
    pages: number,
    publicationYear: number,
    country: string[],
    keywords?: string[]
}