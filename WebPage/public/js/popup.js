function confirmarVisita(){
    Swal.fire(
        'Se agrego correctamente!',
        'Su visita ha sido registrada',
        'success'
    ).then(function(){
        location.reload();
    });
}

function confirmarExpo(){
    Swal.fire(
        'Se agrego correctamente!',
        'Su exposicion ha sido registrada',
        'success'
    ).then(function(){
        location.reload();
    });
}

function confirmarCap(){
    Swal.fire(
        'Se agrego correctamente!',
        'Su capsula ha sido registrada',
        'success'
    ).then(function(){
        location.reload();
    });
}
