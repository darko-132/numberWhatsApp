var nota= 1
function enviar(){
   let link = document.getElementById('link').value
   let ubi = document.getElementById('ubi').value
   let ext = 'wa.me/'
   let nota ='http://'+ext.concat(ubi).concat(link)
   if(link.length >= 5 && ubi !=0){
      let btn = document.getElementById('btn').innerHTML= `<button type="submit" class='btn'><a href="${nota}" id="nota" target="_blank">Enviar</a></button>`
   }else if(link.length <= 5){
      let btn = document.getElementById('btn').innerHTML=''
   }
   console.log(ubi==0)
   console.log(link)
}