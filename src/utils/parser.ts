/** @format */

export function parserResultError(error: any): string | undefined {
    const data = error?.response?.data;
    if (data) {
        let _data = [];
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                _data.push(data[key]);
            }
        }
        return _data.join("\n");
    }
    return "Il y a eu erreur! verifier votre connexion";
}
