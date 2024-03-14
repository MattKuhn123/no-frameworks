import $ from 'jquery';
import { init as cardInit } from "./card.component";
import { init as tableInit } from "./table.component";
import { init as formInit } from "./form.component";

export const init = () => {
  const card = $("#card-container");
  card.load("./assets/card.component.html", function () {
    cardInit();
  });

  const table = $("#table-container");
  table.load("./assets/table.component.html", function () {
    tableInit();
  });

  const form = $("#form-container");
  form.load("./assets/form.component.html", function () {
    formInit();
  });
}