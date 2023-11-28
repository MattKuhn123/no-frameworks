import $ from 'jquery';
import { getData } from "./data-service";

export const html = () => {
  return `
    ${styles()}
    <table class="table table-striped table-bordered">
      <tr>
        <th><p>Text</p></th>
        <th><p>Number</p></th>
      </tr>
      <tbody id="tbody">loading...</tbody>
    </table>
  `;
}

export const init = () => {
  getData().then(async (response) => {
    const datum = (await response.json());
    const rows = datum.data.map(data => `
      <tr>
        <td><p>${data.text}</p></td>
        <td><p>${data.number}</p></td>
      </tr>
    `).join('');

    $("#tbody").html(rows);
  });
};

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