function cartero(destinatario, mensaje){
  destinatario(mensaje);
}

function destinatario1(mensaje){
  console.log('Mensaje recibido -->', mensaje);
}

function destinatario2(mensaje){
  console.log('No recibo mensajes, lo reenvio a destinatario1.');
  cartero(destinatario1,mensaje);
}

/* Enviamos mensajes */

cartero(destinatario1, 'Esto es un mensaje');

cartero(destinatario2, 'Esto es un mensaje distinto');
