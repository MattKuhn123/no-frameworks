import $ from 'jquery';
import { getData } from "./data-service";

export const html = () => {
  return `
    ${styles()}
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th><p>Text</p></th>
          <th><p>Number</p></th>
        </tr>
      </thead>
      <tbody id="tbody"><tr><td>loading...</td></tr></tbody>
    </table>
  `;
}

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

const styles = () => {
  return `
    <style>
      #table {
        & p { 
          color: red;
        }
      }
    </style>
  `;
}