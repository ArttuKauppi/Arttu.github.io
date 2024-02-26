document.addEventListener("DOMContentLoaded",onkoKirjaunut);
function onkoKirjaunut(){
    let kirjautunut ='kylla';
if(kirjautunut === 'kylla') {

    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
}

}
function kirjaudu() {
    
    localStorage.setItem("nimi",document.getElementById("nimi").value);
}