function quita_espcios(e){
    e.value = e.value.replace(/ /g, '');
 } 

function un_espcio(e){
    e.value = e.value.replace(/ {1,}/g, ' ');
 } 

 function quita_espcio_final(e){
    e.value = e.value.trim();
 } 

 