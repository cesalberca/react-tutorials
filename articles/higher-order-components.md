# Higher Order Components

## Índice

* Introducción
* HOF
* HOC

## Higher Order Functions

Antes de ponernos a explicar los Higher Order Components (HOC de aquí en adelante) hemos de explicar las Higher Order Functions (HOF) que usan el mismo mecanismo que los HOCs.

Los Higher Order Components o HOC son componentes que devuelven o transforman otros componentes. Su funcionalidad es parecida a las Higher Order Functions o HOF de la programación funcional donde se pueden hacer lo siguiente:

```javascript
function add(x) {
    return function(y) {
        return x + y
    }
}
```

O su equivalente usando [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```javascript
const add = x => y => x + y
```

El uso del programa escrito anteriormente sería el siguiente:

```javascript
const add5 = add(5)
console.log(add5(50)) // 55
```

¿Qué posibles usos tienen las HOFs? Pues nos permiten expresar más declarativamente funcionalidades de nuestro programa. Por ejemplo, si tuviésemos que escribir un método que filtre elementos de un array basándonos en una propiedad:

```javascript
const animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 }
]

const filter = (array, test) => {
    const matches = []
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            matches.push(array[i])
        }
    }
    return matches
}

const olderThan = age => animal => animal.age > age
const olderThan11 = olderThan(11)

console.log(filter(animals, olderThan11))
 /*
[
    {
        "name": "Waffles",
        "type": "dog",
        "age": 12
    },
    {
        "name": "Fluffy",
        "type": "cat",
        "age": 14
    }
]
 */
```

Las ventajas de este mecanismo es su alta __composición__. Si quisiésemos además de filtar por edad conseguir las medias de edades de los animales podríamos hacerlo fácilmente:

```javascript
const average = array => array.reduce((previous, next) => previous + next) / array.length

console.log(average(filter(animals, olderThan11).map(animal => animal.age)))
// 13
```

En los dos ejemplos anteriores hemos hecho uso de las funciones [map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map) y [reduce](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). La primera ejecuta una acción sobre cada elemento, en nuestro caso retornando la propiedad `age` de cada animal. `reduce` sirve para __reducir__, es decir coger un array y realizar operaciones sobre el elemento anterior y el siguiente. [Aquí tienes](http://www.datchley.name/working-with-collections/) si quieres leer más acerca de ello.

## Higher Order Components

Los HOCs son análogos a los HOFs, solo que en el ámbito de React. Veamos un ejemplo:

```javascript
import React from 'react'

const SimpleComponent = ({injectedProp}) => (<h1>Hello {injectedProp}</h1>)

const withInjectedProp = (WrappedComponent, prop) => {
    return class extends React.Component {
        render() {
            return <WrappedComponent injectedProp={prop + ' from HOC'} />
        }
    }
}

const SimpleComponentWithInjectedProp = withInjectedProp(SimpleComponent, 'world')
export default SimpleComponentWithInjectedProp
```

En este ejemplo transformamos el uso del componente `SimpleComponent` desde el HOC, añadiendo un literal. Este es un ejemplo un tanto simplista que meramente pretende introducir la sintaxis. Ahora veremos casos de uso muy interesantes para los HOCs.

### Nota sobre clases de ES6

A primera vista lo que nos puede extrañar es que hagamos `return` de una clase de JavaScript. Esto se puede hacer debido a que las clases de JavaScript no tienen el mismo comportamiento que las clases de otros lenguajes orientados a objetos, ya que el paradigma de herencia de JavaScript es prototipado y no herencia clásica. Lo que quiere decir esto es que el uso de la palabra reservada `class` no es más que azúcar sintáctico.

Un clase de JavaScript (ES6):

```javascript
// ES6
class Hello {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello ' + this.name + '!';
  }

  static sayHelloAll() {
    return 'Hello everyone!';
  }
}

class HelloWorld extends Hello {
  constructor() {
    super('World');
  }

  echo() {
    console.log(super.hello());
  }
}

var helloWorld = new HelloWorld();
helloWorld.echo();

console.log(Hello.sayHelloAll());
```

es equivalente a lo siguiente:

```javascript
// ES5
function Hello(name) {
  this.name = name;
}

Hello.prototype.hello = function hello() {
  return 'Hello ' + this.name + '!';
};

Hello.sayHelloAll = function () {
  return 'Hello everyone!';
};

function HelloWorld() {
  Hello.call(this, 'World');
}

HelloWorld.prototype = Object.create(Hello.prototype);
HelloWorld.prototype.constructor = HelloWorld;
HelloWorld.sayHelloAll = Hello.sayHelloAll;

HelloWorld.prototype.echo = function echo() {
  console.log(Hello.prototype.hello.call(this));
};

var helloWorld = new HelloWorld();
helloWorld.echo();

console.log(Hello.sayHelloAll());
```

Como puedes observar, por debajo no hace más que manejar el prototipo de las funciones. Más información [aquí](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes).

## Casos de uso

¿Qué nos permiten hacer los HOCs?

* Reusar código, lógica y abstraer la generación de componentes
* "Secuestrar" el renderizado
* Abstracción del estado y su manipulación
* Manipulación de props

Como vemos nos permite hacer un montón de cosas. Pasamos a ver un ejemplo práctico.

## Ejemplo práctico



## Referencias

* [http://eloquentjavascript.net/05_higher_order.html](http://eloquentjavascript.net/05_higher_order.html)
* [https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
* [http://www.datchley.name/working-with-collections/](http://www.datchley.name/working-with-collections/)
* [https://facebook.github.io/react/docs/higher-order-components.html](https://facebook.github.io/react/docs/higher-order-components.html)
* [https://github.com/addyosmani/es6-equivalents-in-es5#classes](https://github.com/addyosmani/es6-equivalents-in-es5#classes)
* [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
* [https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)
