import $ from 'jquery';
import cardHtml from "./card.component.html";

/** @type {{ init: function }} */
let Component;

/**
 * @param { string } selector 
 * @returns { Component }
 */
export function Card(selector) {
  const result = {
    init: function() {
      const card = $(selector);
      card.html(cardHtml);
    }
  };

  result.init();
  return result;
}