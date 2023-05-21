import {
  MenuComponent,
  ScrollComponent,
  StickyComponent,
  ToggleComponent,
  DrawerComponent,
  SwapperComponent,
} from "@/assets/ts/components";

/**
 * @description Initialize KeenThemes custom components
 */
const initializeComponents = () => {
  setTimeout(() => {
    ToggleComponent.bootstrap();
    StickyComponent.bootstrap();
    MenuComponent.bootstrap();
    ScrollComponent.bootstrap();
    DrawerComponent.bootstrap();
    SwapperComponent.bootstrap();
  }, 0);
};

/**
 * @description Reinitialize KeenThemes custom components
 */
const reinitializeComponents = () => {
  setTimeout(() => {
    ToggleComponent.reinitialization();
    StickyComponent.reInitialization();
    MenuComponent.reinitialization();
    reinitializeScrollComponent().then(() => {
      ScrollComponent.updateAll();
    });
    DrawerComponent.reinitialization();
    SwapperComponent.reinitialization();
  }, 0);
};

const reinitializeScrollComponent = async () => {
  await ScrollComponent.reinitialization();
};

export {
  initializeComponents,
  reinitializeComponents,
  reinitializeScrollComponent,
};
