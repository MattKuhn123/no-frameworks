import $ from 'jquery';
import { save } from "./shared/shared-service";
import formHtml from './form.component.html';

export class Form {
  /**
   * @param { string } selector 
   */
  bindTo(selector) {
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
