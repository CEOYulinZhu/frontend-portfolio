class ResourceLoader {
    constructor() {
        this.resources = new Map();
        this.loadingPromises = new Map();
    }

    async preloadImages(urls) {
        const promises = urls.map(url => this.loadImage(url));
        return Promise.all(promises);
    }

    loadImage(url) {
        if (this.loadingPromises.has(url)) {
            return this.loadingPromises.get(url);
        }

        const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                this.resources.set(url, img);
                resolve(img);
            };
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        });

        this.loadingPromises.set(url, promise);
        return promise;
    }

    getResource(url) {
        return this.resources.get(url);
    }

    async loadAudio(url) {
        if (this.loadingPromises.has(url)) {
            return this.loadingPromises.get(url);
        }

        const promise = new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.src = url;
            audio.oncanplaythrough = () => {
                this.resources.set(url, audio);
                resolve(audio);
            };
            audio.onerror = () => reject(new Error(`Failed to load audio: ${url}`));
        });

        this.loadingPromises.set(url, promise);
        return promise;
    }
}

// 导出单例实例
export const resourceLoader = new ResourceLoader(); 