class AppState {
    static instance;

    constructor() {
        if (!AppState.instance) {
            this.data = {};  // Initialize your shared state here
            AppState.instance = this;
        }
        return AppState.instance;
    }

    setData(key, value) {
        this.data[key] = value;
    }

    getData(key) {
        return this.data[key];
    }
}

export const appState = new AppState();
