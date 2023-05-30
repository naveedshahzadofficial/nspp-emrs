import { App } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        range: (start: number, end: number, step?: number, fixed?: number) => string[];
    }
}

export default {
    install: (app: App) => {
        app.config.globalProperties.range = (start: number, end: number, step: number = 1, fixed: number=1): string[] => {
            const length = Math.floor((end - start) / step) + 1;
            return Array.from({ length }, (_, index) => (start + index * step).toFixed(fixed));
        };
    },
};
