/* jshint unused:false */
//# sourceMappingURL=main.map

(function(){
  'use strict';

  $(document).ready(init);



  function init(){
   $('#link').click(linkStrings);
  }

  function linkStrings(){
  	var firstName = $('#first').val();
  	var lastName = $('#last').val();
  	var movie = $('#movie').val();

  	var output = `${firstName.toLowerCase()} ${lastName.toLowerCase()} loves ${movie.toUpperCase()}`;
  	$('#output').text(output);
  }




})();