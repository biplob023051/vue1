// $sidebar = $('.fixed-sidebar');

// // Toggle aside panels
// $(".js-sidebar-open").on('click', function () {
//     $(this).toggleClass('active');
//     $(this).closest($sidebar).toggleClass('open');
//     return false;
// } );

var drop = $("input");
drop.on('dragenter', function (e) {
  $(".drop").css({
    "border": "4px dashed #09f",
    "background": "rgba(0, 153, 255, .05)"
  });
  $(".cont").css({
    "color": "#09f"
  });
}).on('dragleave dragend mouseout drop', function (e) {
  $(".drop").css({
    "border": "3px dashed #DADFE3",
    "background": "transparent"
  });
  $(".cont").css({
    "color": "#8E99A5"
  });
});

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }
  }
}

$('#files').change(handleFileSelect);