import $ from 'jquery';
import { save } from "./shared/shared-service";

export const init = () => {
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
};