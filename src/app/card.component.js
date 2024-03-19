import $ from 'jquery';
import cardHtml from "./card.component.html";

export class Card {
  /**
   * @param { string } selector 
   */
  bindTo(selector){
    const card = $(selector);
    card.html(cardHtml);
  }
}