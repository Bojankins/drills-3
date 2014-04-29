/* jshint unused:false */
//# sourceMappingURL=main.map

(function(){
  'use strict';

  $(document).ready(init);



  function init(){
    $('#square').click(squares);
  }



  function squares(){
    $('#numbers').val().split(',').map(x=>x*x).map(x=>`<div>${x}</div>`).forEach(x=>$('#container').append(x));

  }

  
})();