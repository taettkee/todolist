$(function(){
  $("#list").sortable({
    handle: ".drag-indicator",
    placeholder: "placeholder",
    axis: "y",
    cursor: "grabbing",
    containment: "parent"
  });
  $("#list-tab-container").sortable({
    axis: "x",
    cursor: "grabbing",
    containment: "parent"
  });
});
