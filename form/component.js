import "jquery";
import { save } from "/shared/shared-service.js";

$(function(){
  $("#saving").hide();
	$("#myForm").on("submit", (event) => {
    $("#saving").show();
    save($("#myForm").serializeArray());
    event.preventDefault();
  });

  $(document).bind("saved", (data) => {
    $("#saving").hide();
    $("#myForm").trigger('reset');
  });
});