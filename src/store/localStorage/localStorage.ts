export const getLocalStorage = (key:any) => {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }

    return {};
}

export const setLocalStorage = (key: string, data: number) => {
    localStorage.setItem(key, JSON.stringify(data));
}
