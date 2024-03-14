import $ from 'jquery';
import { getData } from "./data-service";
import { init as rowInit } from "./table-row.component";

/** @type {{text: string, number: string}} */
let RowInput;

const useHtmlTemplate = true;

export const init = async () => {
  $("#tbody").text("loading...");
  const datum = await getData();
  $("#tbody").text("");

  if (useHtmlTemplate) {
    loadTableWithHtmlTemplate(datum);
  } else {
    loadTableWithRawJavaScript(datum);
  }
}

// I prefer this because it's shorter
/**
 * 
 * @param { RowInput[] } datum 
 */
const loadTableWithRawJavaScript = (datum) => {
  const rows = datum.map(data => `
    <tr>
      <td><p>${data.text}</p></td>
      <td><p>${data.number}</p></td>
    </tr>
  `).join('');

  $("#tbody").html(rows);
}

// I like this because it uses html templating.... 
// But it still doesn't escape the issue of having HTML in the Javascript (at least notice the <tr></tr>)
/**
 * 
 * @param { RowInput[] } datum 
 */
const loadTableWithHtmlTemplate = (datum) => {
  for (let idx = 0; idx < datum.length; idx++) {
    const row = $("<tr></tr>");
    row.load("./assets/table-row.component.html", function () {
      $("#tbody").append(row);
      rowInit(datum[idx], idx);
    });
  }
}