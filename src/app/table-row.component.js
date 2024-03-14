import $ from 'jquery';

/** @type {{text: string, number: string}} */
let RowInput;

/**
 * @param { RowInput } input 
 * @param { number } idx 
 */
export const init = (input, idx) => {
    $("p[name=cell-text]").eq(idx).text(input.text);
    $("p[name=cell-number]").eq(idx).text(input.number);
}