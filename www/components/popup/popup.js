define(['css!./popup','tpl!./popup.tpl'], function(css,popuptpl) {
	var popupHtml=(popuptpl({"users":["aa","bb"]}));
  return "<div class='popup'>"+popupHtml+"</div>";
});
