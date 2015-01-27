window.onload = function(){
  if(document.getElementsByTagName('tspan').length > 0){
    run();
  }
  function run(){
    var elements = document.getElementsByTagName('tspan');
    var tags = getTags();
    var username = getUsername();

    // Add event to each tag strings.
    for(var x = 0; x < elements.length; x++){
      if(tags[x] != 'Others'){
        elements[x].addEventListener(
          'click',
          (function(x){
            return function(){
              location.href = 'https://qiita.com/search?q=user%3A' + encodeURIComponent(username) + '+tag%3A' + encodeURIComponent(tags[x]);
            }
          })(x)
        );
        // Modify styles to simulate hyperlink.
        elements[x].style.textDecoration = 'underline';
        elements[x].style.cursor = 'pointer';
      }
    }
  }
  // Get tag strings from DOM.
  function getTags(){
    var elements = document.getElementsByTagName('tspan');
    var tags = [];

    for(var x = 0; x < elements.length; x++){
      tags.push(elements[x].textContent.replace(/.*- /, ''));
    }
    return tags;
  }
  // Get username from DOM.
  function getUsername(){
    return document.getElementsByClassName('userPage_heading')[0].children[0].textContent;
  }
}
