$.get( "https://www.yr.no/sted/Norge/Rogaland/Eigersund/Stapnes/varsel.xml", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});