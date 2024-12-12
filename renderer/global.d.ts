// global.d.ts
export {};

declare global {
    interface Window {
        api: {
            fetchPrices: (url: string) => Promise<any>;
        };
    }
}
