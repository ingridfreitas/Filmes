export interface Filmes{
    id: string,
    nome: string,
    desc: string,
    fav: number,
    imagePath: string,
    dataDur: string,
    generos: string[],
    pagina?: string
}