import $ from 'jquery';
import { Card } from "./card.component";
import { Table } from "./table.component";
import { Form } from "./form.component";
import appHtml from './app.component.html';

/** @type {{ init: function }} */
let Component;

/**
 * @param { string } selector
 * @returns  { Component }
 */
export function App(selector) {
  const result =  {
    init: function() {
      const app = $(selector);
      app.html(appHtml);

      const card = Card("#card-container");
      const table = Table("#table-container");
      const form = Form("#form-container");
    }
  }

  result.init();
  return result;
}