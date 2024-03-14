import $ from 'jquery';

export const init = (input, idx) => {
    $("p[name=cell-text]").eq(idx).text(input.text);
    $("p[name=cell-number]").eq(idx).text(input.number);
}