import $ from 'jquery';
import { html as cardHtml } from "./card.component";
import { html as tableHtml, init as tableInit } from "./table.component";
import { html as formHtml, init as formInit } from "./form.component";

export const html = () => {
  return `
    ${style()}
    <div>
      <h1 class="text-center">No frameworks!</h1>
      <div class="row-container">
        <div id="card">Card</div>
        <div id="table">Table</div>
      </div>
      <div id="form">Form</div>
    </div>
  `;
}

export const init = () => {
  const card = $("#card");
  card.html(cardHtml());

  const table = $("#table");
  table.html(tableHtml());
  tableInit();

  const form = $("#form");
  form.html(formHtml());
  formInit();
}

const style = () => {
  return `
    <style>
      #app {
      & .row-container {
        display: flex;
        flex-direction: row;
        padding: 5px;
        column-gap: 10px;
      }
    }
    </style>
  `;
}
