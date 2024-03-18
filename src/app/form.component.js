import $ from 'jquery';
import { save } from "./shared/shared-service";
import formHtml from './form.component.html';

/** @type {{ init: function }} */
let Component;

/**
 * @param { string } selector 
 * @returns { Component }
 */
export function Form(selector) {
  const result = {
    init: function () {
      const form = $(selector);
      form.html(formHtml);
  
      $("#saving").hide();
      $("#myForm").on("submit", (event) => {
        $("#saving").show();
        save($("#myForm").serializeArray());
        event.preventDefault();
      });
    
      $(document).on("saved", (data) => {
        $("#saving").hide();
        $("#myForm").trigger('reset');
      });
    }
  }

  result.init();
  return result;
}
