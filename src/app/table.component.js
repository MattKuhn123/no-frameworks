import $ from 'jquery';
import { getData } from "./data-service";

export const init = async () => {
  const response = await getData();
  const datum = await response.json();
  const rows = datum.data.map(data => `
    <tr>
      <td><p>${data.text}</p></td>
      <td><p>${data.number}</p></td>
    </tr>
  `).join('');

  $("#tbody").text("");
  $("#tbody").html(rows);
}