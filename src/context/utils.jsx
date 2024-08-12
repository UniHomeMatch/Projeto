export function SetLocalStorage(user) {
    localStorage.setItem('login', JSON.stringify(user));
}

export function GetLocalStorage() {
    const json = localStorage.getItem('login');
    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}