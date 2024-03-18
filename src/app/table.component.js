import $ from 'jquery';
import { getData } from "./data-service";
import tableHtml from './table.component.html';
import { TableRow } from './table-row.component'

/** @type {{ text: string, number: string }} */
let RowInput;

/** @type {{ init: function }} */
let Component;

/**
 * @param { string } selector 
 * @returns { Component }
 */
export function Table(selector) {
  const result = {
    init: async function() {
      const table = $(selector);
      table.html(tableHtml);
  
      $("#tbody").text("loading...");
      const datum = await getData();
      $("#tbody").text("");
  
      this.loadTableWithHtmlTemplate(datum);
    },
  
    /**
     * @param { RowInput[] } datum 
     */
    loadTableWithHtmlTemplate: function(datum) {
      for (const element of datum) {
        const row = TableRow("#table", element);
      }
    }
  };

  result.init();
  return result;
}
