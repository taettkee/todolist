$(function(){
  $("#list").sortable({
    handle: ".drag-indicator",
    placeholder: "placeholder",
    axis: "y",
    cursor: "grabbing"
  });
});
