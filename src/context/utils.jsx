export function SetLocalStorage(user) {
    localStorage.setItem('Yt', JSON.stringify(user));
  }
  
  export function GetLocalStorage() {
    const json = localStorage.getItem('Yt');
    if (!json) {
      return null;
    }
    const user = JSON.parse(json);
    return user ?? null;
  }