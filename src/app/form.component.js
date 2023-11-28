import $ from 'jquery';
import { save } from "./shared/shared-service";

export const html = () => {
  return `
    ${style()}
    <form id="myForm" class="row g-3">
      <div class="col-md-4">
        <label for="firstName" class="form-label">First name</label>
        <input type="text" class="form-control" id="firstName" name="firstName" value="" required>
      </div>
      <div class="col-md-4">
        <label for="lastName" class="form-label">Last name</label>
        <input type="text" class="form-control" id="lastName" name="lastName" value="" required>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
    <p id="saving">saving...</p>
  `;
}

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

const style = () => {
  return `
  <style>

  </style>
  `;
}