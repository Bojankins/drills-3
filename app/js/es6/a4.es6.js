
/* jshint unused:false */
/* global moment:true  */
/* global _:true */
//# sourceMappingURL=main.map


(function(){
  'use strict';

  $(document).ready(init);



  function init(){
    $('#cube').click(randomCubes);
  }


  function randomCubes(){
  	var cubes = $('#numbers').val().split(',');
  	var first = cubes[0];
  	var last = cubes[1];
  	var step = cubes[2];

  	var range =  _.range(first,last,step);
  	var _cubes = _.chain(range).map(x=>Math.pow(x,3)).shuffle().map(x=>`<div>${x}</div>`).forEach(x=>$('#container').append(x));
  }


  
})();