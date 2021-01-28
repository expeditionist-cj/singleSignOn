

export const getQueryString = (name: string) => {
    const reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    let token: RegExpMatchArray | null = window.location.search.substr(1).match(reg);
    console.log(window.location.search, reg, token, 888);

    if (token !== null) {
        let r: string | null = unescape(token[2])
        return r;
    } else {
        return null;
    }

}
