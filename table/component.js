import "jquery";
import { getData } from "/table/service.js";

$(function() {
  getData().then(async (response) => {
    const datum = (await response.json());
    const rows = datum.data.map(data => `
      <tr>
        <td><p>${data.text}</p></td>
        <td><p>${data.number}</p></td>
      </tr>
    `).join('');

    const table = `
      <table class="table table-striped table-bordered">
        <tr>
          <th><p>Text</p></th>
          <th><p>Number</p></th>
        </tr>
        ${rows}
      </table>
    `;

    $("#data-table").html(table);
  });
});