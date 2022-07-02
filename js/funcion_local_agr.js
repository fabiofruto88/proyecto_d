var agricultor = [];

function addAgriToSystem(pnombre, papellido, pident, ptel, plugar){
    var newAgri ={
        nombre: pnombre,
        apellido: papellido,
        identidad: pident,
        telefono: ptel,
        lugar: plugar
    };
    console.log(newAgri);
    agricultor.push(newAgri);

}
