import type { App } from "vue";

import PrimeVue from "primevue/config";

// import Button from "primevue/button";

export default (app: App) => {
  app.use(PrimeVue);
  //   app.component("Button", Button);
};
