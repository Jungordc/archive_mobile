/** @format */

interface AsyncStorage {
    setItem(key: string, value: string): Promise<any>;
    getItem(value: string): Promise<any>;
}

interface SucureStorage {
    setItemAsync(key: string, value: string): Promise<any>;
    getItemAsync(key: string): Promise<any>;
}

export class AdaptatorSecureToAsyncStorage<AsyncStorage> {
    private sucureStorage: SucureStorage;
    constructor(sucureStorage: SucureStorage) {
        this.sucureStorage = sucureStorage;
    }

    /**
     * setItem
     */
    public async setItem(key: string, value: string) {
        return this.sucureStorage.setItemAsync(key, value);
    }

    /**
     * getItem
     */
    public async getItem(key: string) {
        return this.sucureStorage.getItemAsync(key);
    }
}
