document.querySelector('#btnSaveAgri').addEventListener("click", saveAg);

function saveAg(){
    var snombre = document.querySelector('#nombres').value,
    sapellido = document.querySelector('#apellido').value,
    sidentificacion = document.querySelector('#ident').value,
    stelefono = document.querySelector('#tel').value,
    slugar = document.querySelector('#lugar').value;

    addAgriToSystem(snombre,sapellido,sidentificacion,stelefono,slugar);
    

}