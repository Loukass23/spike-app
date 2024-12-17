export const getCharactersPromise = () => {
    const promise = fetch("https://rickandmortyapi.com/api/character").then(response => response.json());
    return promise;
}