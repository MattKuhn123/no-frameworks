import $ from 'jquery';
import { getData } from "./data-service";
import tableHtml from './table.component.html';
import tableRowHtml from './table-row.component.html'

/** @type {{ text: string, number: string }} */
let RowInput;

export class Table {
    async bindTo(selector) {
      const table = $(selector);
      table.html(tableHtml);
  
      $("#tbody").text("loading...");
      const datum = await getData();
      $("#tbody").text("");
  
      this.datumToRows(datum);
    }
  
    /**
     * @param { RowInput[] } datum 
     */
    datumToRows(datum) {
      for (const element of datum) {
        this.dataToRow(element);
      }
    }

    /**
     * @param { RowInput } data 
     */
    dataToRow(data) {
      $('#table > tbody:last-child').append(tableRowHtml);

      $('#table > tbody tr:last td:first p').text(data.text);
      $('#table > tbody tr:last td:last p').text(data.number);
    }
}
