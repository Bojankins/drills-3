/* jshint unused:false */
/* global moment:true  */
//# sourceMappingURL=main.map


(function(){
  'use strict';

  $(document).ready(init);



  function init(){
    $('#days').click(daysFromNow);
  }



  function daysFromNow(){
  	var date = $('#date').val();
  	var fromNow = moment(date, 'YYYYMMDD').fromNow();
  	$('#container').text(fromNow);
  }

  
})();