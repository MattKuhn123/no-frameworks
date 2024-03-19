import $ from 'jquery';
import { Card } from "./card.component";
import { Table } from "./table.component";
import { Form } from "./form.component";
import appHtml from './app.component.html';

export class App {
  /**
   * @param { string } selector
   */
  bindTo(selector) {
    const app = $(selector);
    app.html(appHtml);

    const card = new Card();
    card.bindTo("#card-container");

    const table = new Table();
    table.bindTo("#table-container");

    const form = new Form();
    form.bindTo("#form-container");
  }
}