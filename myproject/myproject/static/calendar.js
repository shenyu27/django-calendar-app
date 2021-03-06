$.fn.showEdit = function(id) {
  $(document).on('click', '#pencil-'+id, (function(event) { event.preventDefault(); }));
};

$.fn.hideEdit = function(id) {
};

$.fn.send_request = function() {
    alert("asd");
  $.get(location.href, function(data){
    $("#idName").html(data.name);
    $("#idBirthday").html(data.birthday);
  });
};

$(document).ready(function() {
     $(".day").hover( 
        function() {
        var id = $(this).data('id');
        $(this).css( "background-color", "rgba(50,79,195,0.35)" );
        $(this).showEdit(id);
        $('#edit-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('slow');
        $('#pencil-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('slow');
        $('#star-icon-'+id).css({ visibility: "hidden" });
        return this;
    }, function() {
        var id = $(this).data('id');
        $(this).hideEdit(id);
        $(this).css( "background-color", "rgba(50,79,195,0.4)" );
        $('#edit-icon-'+id).css({ visibility: "hidden" });
        $('#pencil-icon-'+id).css({ visibility: "hidden" });
        $('#star-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('fast');
        return this;
      });
      
    $(".current").hover( 
        function() {
        var id = $(this).data('id');
        $('#edit-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('slow');
        $('#pencil-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('slow');
        $('#star-icon-'+id).css({ visibility: "hidden" });
        return this;
    }, function() {
        var id = $(this).data('id');
        $('#edit-icon-'+id).css({ visibility: "hidden" });
        $('#pencil-icon-'+id).css({ visibility: "hidden" });
        $('#star-icon-'+id).stop(true, true).hide().css({
          visibility: "visible"
        }).fadeIn('fast');
        return this;
      });
});
