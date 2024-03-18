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
export function TableRow(selector, input) {
    const result = {
        /**
         * @param { RowInput } input 
         * @param { number } idx 
         */
        init: function (input) {
            $(selector + ' > tbody:last-child').append(tableRowHtml);

            $(selector + ' > tbody tr:last td:first p').text(input.text);
            $(selector + ' > tbody tr:last td:last p').text(input.number);
        }
    };

    result.init(input);
    return result;
}