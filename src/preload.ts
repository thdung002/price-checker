import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
    fetchPrices: async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },
});