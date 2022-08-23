export const SWAPI_DEV = 'https://swapi.dev/api/';
export const SWAPI_DEV_PEOPLE = SWAPI_DEV + 'people';
export const SWAPI_DEV_PEOPLE_PAGE = SWAPI_DEV + 'people' + '/?page=';

export const getApiResource = async (url: string) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error: any) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// export const changeHTTP = (url: string) => {
//     return url ? url.replace(HTTP, HTTPS) : url;
// }

