import $ from 'jquery';
import tableRowHtml from './table-row.component.html';

/** @type {{ text: string, number: string }} */
let RowInput;

/** @type {{ init: function }} */
let Component;

/**
 * @param { string } selector 
 * @param { RowInput } input 
 * @returns  { Component }
 */
export function TableRow(input) {
    const result = {
        /**
         * @param { RowInput } input 
         * @param { number } idx 
         */
        init: function (input) {
            console.log(input);
            debugger;
            $('#table > tbody:last-child').append(tableRowHtml);

            $('#table > tbody:last-child td:first p').text(input.text);
            $('#table > tbody:last-child td:last p').text(input.number);
        }
    };

    result.init(input);
    return result;
}