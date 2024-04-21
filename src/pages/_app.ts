import type { App } from "vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";

import Button from "primevue/button";
import Calendar from "primevue/calendar";

export default (app: App) => {
  app.use(PrimeVue);
  app.component("PrimeButton", Button);
  app.component("Calendar", Calendar);
};
