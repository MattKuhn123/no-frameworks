import $ from 'jquery';
import { init as cardInit } from "./card.component";
import cardHtml from "./card.component.html";

import { init as tableInit } from "./table.component";
import tableHtml from "./table.component.html";

import { init as formInit } from "./form.component";
import formHtml from "./form.component.html";

export const init = () => {
  const card = $("#card-container");
  card.html(cardHtml);
  cardInit();

  const table = $("#table-container");
  table.html(tableHtml);
  tableInit();

  const form = $("#form-container");
  form.html(formHtml);
  formInit();
}