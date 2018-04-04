//When a tag button is clicked
$('#utility .btn-tag').click(function() {
  //Toggle the tag state
  $(this).toggleClass('enabled');
  //Create an array of enabled filters
  var filters = [];
  $('#utility').children('button').each(function() {
    if (this.classList.contains('enabled')) filters.push(this.innerHTML);
  });
  
  //Default to displaying everything (no filters)
  $('.media').css('display', 'block');
  $('#error').css('display', 'none');
  
  //If there are filters enabled
  if (filters.length) {
    //Disable every article
    var articlesShown = 0;
    $('.media').css('display', 'none');
    //Loop through media
    for (var i = 1; i <= $('#directory .flex-group').children().length; i++) {
      //Gather media's tags
      var mediaTags = [];
      $('#article-' + i + ' .tags').children().each(function() {
        mediaTags.push(this.innerHTML);
      });
      //Checks if this media should be shown, and follows through
      var checkThisMedia = filters.every(function(x) {
        return mediaTags.includes(x);
      });
      if (checkThisMedia) {
        $('#article-' + i).css('display', 'block');
        articlesShown++;
      }
    }
    //If no articles are shown, show an error
    if (!articlesShown) $('#error').css('display', 'block');
  }
});