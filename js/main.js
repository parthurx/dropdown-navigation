function abrirMenu(){
    document.getElementById("menu").style.width = "240px";
    document.querySelector('.opacity').style.background = "rgba(0, 0, 0, 0.8)"
}

function fecharMenu(){ 
    document.getElementById("menu").style.width = "0px"
    document.querySelector('.opacity').style.background = "none"
    document.getElementById("listFeature").style.display = "none";
    document.getElementById('listCompany').style.display = "none";

    document.getElementById("abrirCompany").style.display = "inline";
    document.getElementById("feature").style.display = "inline";
    document.getElementById("fecharFeature").style.display = "none";
    document.getElementById("fecharCompany").style.display = "none";
}

function abrirFeature(){
    document.getElementById("listFeature").style.display = "block";
    document.getElementById("feature").style.display = "none";
    document.getElementById("fecharFeature").style.display = "inline";
}

function fecharFeature(){
    document.getElementById("listFeature").style.display = "none";
    document.getElementById("feature").style.display = "inline";
    document.getElementById("fecharFeature").style.display = "none";
}


function abrirCompany(){
    document.getElementById('listCompany').style.display = "block";
    document.getElementById("abrirCompany").style.display = "none";
    document.getElementById("fecharCompany").style.display = "inline";
    document.getElementById("list-company").style.display = "block"
}

function fecharCompany(){
    document.getElementById('listCompany').style.display = "none";
    document.getElementById("abrirCompany").style.display = "inline";
    document.getElementById("fecharCompany").style.display = "none";
    document.getElementById("list-company").style.display = "none"
}