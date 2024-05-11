import type { App } from "vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-dark-green/theme.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import AutoComplete from "primevue/autocomplete";
import FloatLabel from "primevue/floatlabel";
import Menubar from "primevue/menubar";
import Menu from "primevue/menu";
import Card from "primevue/card";
import Badge from "primevue/badge";
import Divider from "primevue/divider";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default (app: App) => {
  app.use(PrimeVue);
  app.component("Button", Button);
  app.component("Calendar", Calendar);
  app.component("AutoComplete", AutoComplete);
  app.component("FloatLabel", FloatLabel);
  app.component("Menubar", Menubar);
  app.component("Menu", Menu);
  app.component("Card", Card);
  app.component("Badge", Badge);
  app.component("Divider", Divider);
  app.component("DataTable", DataTable);
  app.component("Column", Column);
};
