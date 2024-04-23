import type { App } from "vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import AutoComplete from "primevue/autocomplete";
export default (app: App) => {
  app.use(PrimeVue);
  app.component("Button", Button);
  app.component("Calendar", Calendar);
  app.component("AutoComplete", AutoComplete);
};
