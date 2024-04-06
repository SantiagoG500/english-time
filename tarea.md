# Explicación
## Creando objetos en Js

La programación orientada a objetos se hace normalente con sintaxis de prototipos o de clases. Pero no soportan variables y métodos privados, pero hay una forma de implementar encapsulamiento.

En python un diccionario **( { } )** se lo conoce como un objeto en Js. Funcionando como una instancia de una clase de Java

``` JavaScript

const perro = {
  nombre: "Lucas",
  raza: "Buldog Francés", 
  caminar: () => {...}
}
console.log(perro.nombre) // Lucas
console.log(perro.raza) // Buldog Francés
console.log(perro.caminar()) // Ejecuta la función con la clave "caminar"

```

## Funciones

Las funciones en Javascript pueden retornar **cualquier cosa**. Un objeto incluso

``` JavaScript

// Va a retornar con el objeto con los valores que se le indiquen
function Perro = () {
  return {
    nombre: "Lucas",
    raza: "Buldog Francés", 
    caminar: () => {...}
  }
}
```

las funciones, condiciones, bucles tiene una cosa llamada **scope** cualquier que no exista en su scope no puede ser accedido, porque están **encapsulados** en su **contexto**.

``` JavaScript
{
  const str = '...'
}
console.log(str) // error: str es undefined
```

str es indefinido porqué el console.log(str) y la constante str están en contextos distitnos, por eso el console.log no puedo acceder a la variable y el error es será que la variable no existe.

``` JavaScript
  const str = '...'
{
  console.log(str) // valor: "..."
}
```

En este caso si es posible que console.log encuentre el valor de la constante, porque **cualquier cosa que esté encapsulada puede ver lo que está afuera de su contexto**, la constante está declarada en un contexto global y el console.log no, pero si puede ver los valores que están a fuera de su contexto.

## "Clases" encapsuladas

Sabiendo más o menos como funciona el **scope**, y sabiendo que las funciones de Js no permiten valores privados. podemos fabricar nuestra propia **Clase** que user **encapsulado** usando funciones.

``` JavaScript
// Clase perro
function perro (nombre, raza) {
  const priv = 'valor privado'
  const pub = 'valor publico'

  // Método privado
  function privado() {}
  // Método público
  function publico() {}

  return {
    nombre, raza, publico, pub
  }
}

const newPerro = Perro("Lucas", "Bulldog Francés")
newPerro.publico() // método accesible
newPerro.privado() // método inaccesible

newPerro.pub // atributo accesible
newPerro.priv // atributo inaccesible

```

¿Qué hace unos valores privados y otros públicos? se hacen publicos cuando lso retornamos en el objeto, y son privados siempre que no estén dentro del objeto retornado.

## Tarea

Hay que crear dos Clases: **QuestionT1 y QuestinT2**. Los nombres provienen de **(Tipo 1 y tipo 2)**.

### QuestionT1

va a funcionar como una pregunta de selección múltiple normal, tiene que contener las siguientes cosas:

- **question**: String que guarde la pregutna
- **answers**:  Array de Strings que guarde las posibles respuestas a la pregunta
- **userAnswer**: String que guarde la respuesta seleccionada por el usuario
- **correctAnswer**: String que guarde la respuesta correcta a la pregunta, la propiedad debe de ser **privada**
- **answerIsCorrect**: Booleano que determine si la respuesta es correcta o no

### QuestionT2

Es una pregunta con espacios en blanco, que tiene que ser rellenados por el usuario para retornar la respuesta correcta, debe tener las siguietens cosas

- cPhrase (Complete phrase): Array de strings que guarde la frase completa y correcta. esta propiedad debe ser **privada**
- uPhrase (Uncomplete phrase): Array de strings que guarde la frase incompleta con los espacios que deben ser completados **(Para representar los espacios usen corchetes, por ejemplo: esto [] una [] incompleta). en estos corchetes irán después las múltiples opciones para completar la frase.**
- answerIsCorrect: Booleano que indique si la repuesta fue corecta o no

En este caso, las frases que entren como paramentros deben ser **String**, para luego convertirlas en un **Array** con cada una de las palabras que pertenezcan a la frase. A parte tienen que ser retornados la frase en su version de String y en su versión de Array. **Ambas clases deben de ser testeadas en el mismo script, nada de pedir datos pro consola, en su lugar se deben pasar los parametros de prueba directamente a la función**
