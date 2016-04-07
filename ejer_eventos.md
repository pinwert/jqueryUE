#Ejercicios Eventos

- Abrimos la pagina de la [Unidad Editorial](http://www.unidadeditorial.es/)
- Abrimos las herramientas de desarrollo de chrome(ctrl+shift+i)

##Empezamos con lo basico##

- Creamos una funcion que reciba como parametro un evento y lance una alerta.
- Creamos un evento 'click' sobre el body que ejecute la funcion anterior.
- Lanzamos el evento anterior desde la consola.
- Eliminamos el evento que hemos creado.
- Creamos de nuevo un evento que se lance solo la primera vez que hagamos 'click' en el body.

##Ahora con lo sencillo##

- Creamos un evento 'click' que se lance en todos los elementos 'li' bajo un nodo 'nav'.
- En el evento anterior evitamos la navegación.
- Añadimos un nuevo nodo li hermano de los anteriores ¿Si hago 'click' sobre este que ocurre?
- Modificamos el evento para que afecte tambien a los nuevos nodos creados.
- Mostramos ahora, si tiene un nodo hijo con href, este dato en el 'alert'.
- Calculamos el numero de 'li' que tiene el 'nav' y lo mostramos en el 'alert'

##Segimos complicandolo##

- Creamos un evento 'click' sobre todos los 'li' y otro evento click sobre todos los 'nav'.
- Evitamos que el evento sobre el 'nav' se lance al hacer click sobre un 'li'.
- Deshabilitamos la navegación de los enlaces anteriores, habilitamos un evento que al pulsar en el primer 'h1' cree un evento sobre los 'li' anteriores que lance un 'alert' al hacer 'click'
- Abrimos ahora la pagina de [jQuery](http://jquery.com/)
- Buscamos el primer elemento 'input' y sobre ese elemento activamos un evento 'keyup' que nos muestre en el log lo que estamos escribiendo
- Modificamos el evento anterior para que transforme lo que escribimos en mayusculas en tiempo real.

##Empecemos a relacionar cosas##

- Sobre el 'input' que acabamos de actuar. tenemos que validar que se haya insertado un minimo de tres letras y un maximo de diez. Mostrando de esta manera un mesaje o no al pulsar el boton de la lupa.
- Ahora tenemos que poner un 'background-color' rojo a los 'div' pares si el numero de letras es par y si es impar quitar este y ponerle uno verde a los 'div' impares.
