import $ from 'jquery';
export const save = (data) => {
  setTimeout(() => {
    $(document).trigger("saved", data);
  }, 1000);
}
