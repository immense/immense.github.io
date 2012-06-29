console.log('This would be the main JS file.');

$(document).ready(function() {
  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
});        
