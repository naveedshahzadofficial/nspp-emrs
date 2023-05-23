import {getUniqueIdWithPrefix} from "@/assets/ts/_utils";

export interface AppClassesOptions {
    target: string,
    classNames: Array<string>
}
const defaultAppClassesOptions: AppClassesOptions = {
    target: '#app',
    classNames: ['d-flex','flex-column','flex-root']
}

class AppClassesComponent {
    element: HTMLElement
    instanceUid: string
    options: AppClassesOptions

    constructor(_element: HTMLElement, options: AppClassesOptions) {
        this.options = Object.assign(defaultAppClassesOptions, options)
        this.instanceUid = getUniqueIdWithPrefix('appClasses')
        this.element = _element
        this._addClasses();
    }

    private _addClasses = () => {
        this.options.classNames.forEach((cls) => {
            if(!this.element.classList.contains(cls)){
                this.element.classList.add(cls);
            }

        })
    }
    public static createInsance = (
        selector: string,
        options: AppClassesOptions = defaultAppClassesOptions
    ): AppClassesComponent | undefined => {
        const element = document.body.querySelector(selector)
        if (!element) {
            return
        }
        const item = element as HTMLElement
        return new AppClassesComponent(item, options)
    }

    public static reinitialization = () => {
        AppClassesComponent.createInsance('#app')
    }

    public static bootstrap = () => {
        AppClassesComponent.createInsance('#app')
    }
}
export {AppClassesComponent, defaultAppClassesOptions}


