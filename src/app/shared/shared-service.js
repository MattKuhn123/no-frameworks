import $ from 'jquery';
export const save = (data) => {
  setTimeout(() => {
    console.log("trigger saved");
    $(document).trigger("saved", data);
  }, 1000);
}
