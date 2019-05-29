$(document).ready(function () {
  $("#save").click(save);
});


var save = function save_thought() {
  var thought = $("#thought").val();
  $("#thought").val('');
  chrome.extension.getBackgroundPage().write(thought);
};


var view = function open_logs() {
  //TODO
};
