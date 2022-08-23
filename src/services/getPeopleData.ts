export const getId = (url: string, category: string) => {
    const id = url
        .replace('https://swapi.dev/api/' + category, '')
        .replace(/\//g, '')
    return id
}

export const getPeopleId = (url: string) => getId(url, 'people')

export const getPeopleImage = (id: string) => `${'https://starwars-visualguide.com/assets/img/characters/'}/${id + '.jpg'}`;

