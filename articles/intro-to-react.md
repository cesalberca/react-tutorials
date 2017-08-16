Antes de empezar este tutorial es recomendable tener conocimientos intermedios de [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y de [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla).

---

# 1. Introducción

[React](https://facebook.github.io/react/) es una librería para crear interfaces de usuarios. Fue creada por Facebook en 2011 y liberada como open source en 2013, cuenta con proyectos en producción por compañías como Netflix, Airbnb, Walmart, Facebook e Instagram.

Sus más notables propuestas son:

* Propagación de datos unidireccional: Los datos son propagados de __componentes padres a componentes hijos__. La comunicación entre padres e hijos se hace mediante __[callbacks](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)__ y los eventos son enviados de hijos a padres, siendo los componentes padre los que gestionan el estado y la lógica.
* DOM Virtual: React genera una estructura en memoria semejante al DOM físico. Cuando detecta algún cambio compara entre el DOM virtual y el DOM físico y sólamente recarga aquello que haya cambiado. Ésta innovación hace obsoleto el tener que recargar la página entera cada vez que el estado es modificado.
* JSX: JSX es una extensión de la sintaxis de Javascript comúnmente usada para codificar los componentes. Es semejante a html y se embebe en los ficheros `.js`, con lo que disponemos de todas las ventajas programáticas de Javascript.
* Aplicaciones isomórficas: Esto quiere decir que las aplicaciones web se pueden renderizar tanto en el cliente como en el servidor. Si ésta se renderiza en el servidor se puede enviar al cliente desde el servidor html puro en aquellos casos que se pueda.
* React Native: Facebook lanzó en 2015 [React Native](https://facebook.github.io/react-native/), el cual permite crear componentes usando herramientas de desarollo web y que genera aplicaciones __nativas__ tanto para _Android_ como para _IOS_.

Todo el código podrá verse en Github en este [link](https://github.com/cesalberca/react-tutorial).

# 2. Entorno

* Hardware: MacBook Pro 17' (2,66 GHz Intel Core i7, 8GB DDR3)
* Sistema operativo: macOS Sierra 10.12.4
* Entorno de desarrollo: VSCode
* Nodejs 7.7.4

# 3. Instalación

Vamos a usar [Create React App](https://github.com/facebookincubator/create-react-app) para crear una aplicación web sin necesidad de configurar nada.

Unicamente necesitaremos instalar en nuestra máquina [NodeJS](https://nodejs.org/en/) (Versión 7.7.4 o mayor). Si estás en windows es necesario reiniciar.

Una vez instalado NodeJS pasaremos a descargar la utilidad de `create-react-app`. Para ello abrimos terminal y seguimos estos comandos:

```
npm install -g create-react-app

create-react-app react-tutorial
cd react-tutorial/
npm start
```

Si todo ha ido bien veremos la siguiente pantalla:

![Create React App ejecutándose](https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67)

Además veríamos que se abre nuestro navegador con la aplicación ya corriendo.

# 4. ¿Qué es lo que ha hecho create-react-app?

Create React App ha generado y dispuesto una estructura de ficheros de la siguiente forma:

```
react-tutorial/
  README.md
  node_modules/     // Librerías de nuestra aplicación
  package.json      // Información y dependencias de nuestro proyecto
  .gitignore        // Fichero donde se determina qué carpetas no deberán ser trackeadas con git
  public/
    favicon.ico
index.html          // Página donde se inyectarán los componentes de React
  src/              // Directorio de desarrollo que es el que usaremos nosotros
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Además nos ayuda a generar un servidor local de desarrollo que nos muestra errores nos ofrece linting en nuestro editor y recarga la página automáticamente cuando un cambio es detectado. 😎

## 5. Componentes

Vamos a crear nuestro primer componente. Creamos un fichero nuevo llamado `Hola.js` en la carpeta `src`.

_Nota: Por convención los componentes de React se escriben con la primera letra en mayúsculas_.

```jsx
import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <h1>Hola mundo</h1>
    );
  }
}

export default Hola;
```

Para usar este componente vamos a ir al fichero `App.js` y pondremos lo siguiente:

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Importamos nuestro componente
import Hola from './Hola';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <Hola/>
        </div>
      </div>
    );
  }
}

export default App;
```

Guardamos y veremos que la página se ha recargado automáticamente. Tendríamos que ver lo siguiente:

![test](./assets/mi-primer-componente.png)

Vamos a hacer un repaso rápido del código que acabamos de escribir.

```jsx
import React, { Component } from 'react';
```

Aquí importamos React. React tiene que estar en el contexto para que sepa que es un componente de React. Además, importamos de la librería de React el módulo `{ Component }`. Esto se debe a que nuestra clase debe extender de `Component`.

```jsx
class Hola extends Component {
    ...
}
```

Este es nuestro componente y debe extender de Component.

```jsx
render() {
  return (
    <h1>Hola mundo</h1>
  );
}
```

Este es el único método de nuestra clase. Tiene que ser llamado obligatoriamente `render()` y este método es el que se encarga de renderizar el componente. Varios puntos a tener en cuenta. React necesita que retornemos un único elemento (Independientemente de cuantos hijos tenga), por ejemplo, esto nos daría un error:

```jsx
render() {
  return (
    <h1>Hola mundo</h1>
    <h1>Adios mundo</h1>
  );
}
```

Mientras que esto estaría bien

```jsx
render() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <h1>Adios mundo</h1>
    </div>
  );
}
```

Y el otro punto importante es que hay ciertas palabras reservadas que no se pueden usar, ya que recordemos que estamos escribiendo html (JSX) en Javascript, y hay nombre que colisionan. Por ejemplo, `class` debe ser sustituida por `className` y `for` tiene que ser sustituida por `htmlFor`.

```jsx
export default Hola;
```

Esta línea quiere decir que vamos a exportar nuestro componente para que éste pueda ser usado a lo largo de nuestra aplicación.

# 6. Props

Vamos a hacer que nuestro componente `Hola` sea dinámico.

```jsx
import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <h1>Hola {this.props.nombre}</h1>
    );
  }
}

export default Hola;
```

El objeto `props` es un objeto especial donde se determinan todas las propiedades que tiene un componente. Se usa para hacer que los componentes rendericen una cosa u otra. A este objeto props se le puede pasar desde __strings__ hasta __objetos__ e incluso __funciones__.

Para asignarle un prop a un componente vamos a `App.js` y cambiamos

```jsx
<Hola/>
```

por

```jsx
<Hola nombre="César"/>
```

Veremos que la página se recarga y deberíamos ver lo siguiente:

![Hola César](./assets/hola-test.png)

Es importante ver que para hacer uso de expresiones en jsx éstas tienen que estar entre llaves. Dentro de estas llaves podemos hacer virguerías como:

```jsx
<h1>Hola {1 + 1}</h1>
```

O por ejemplo

```jsx
<h1>{this.props.nombre === 'César' ? `Ave ${this.props.nombre}` : 'Tú no eres César'}</h1>
```

Que hace que si la propiedad que hemos pasado a nuestro componente es "César" nos saluda como es debido.

# 7. State

Vamos a ver una parte primordial de las aplicaciones hechas con React. El __estado__. Imaginemos que queremos hacer un contador que vaya contando de uno en uno.

Primero hagamos un componente llamado `Contador.js` en la carpeta `src`.

```jsx
import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0
    };
  }

  render() {
    return (
      <span>{this.state.contador}</span>
    );
  }
}

export default Contador;
```

Vamos a ir poco a poco explicando lo que hace cada parte.

```jsx
constructor() {
  super();

  this.state = {
    contador: 0
  };
}
```

En el constructor de la clase llamamos a `super()` requisito obligatorio si tenemos un constructor. En la siguiente línea inicializamos `state` y le asignamos un objeto con una clave y un valor. Este estado puede ser cualquier cosa, desde más objetos hasta arrays o strings.

Si queremos más estados, sólamente los tenemos que separar por comas

```jsx
this.state = {
    contador: 0,
    miArray: [1, 2, 3],
    miObjeto: {
        clave: 'valor'
    }
  };
```

```jsx
render() {
  return (
    <span>{this.state.contador}</span>
  );
}
```

En el método ´render()´ pintamos el estado con `this.state.contador`. Ahora bien, el puntazo de React es que __cuando modificamos el estado, todos aquellos componentes que dependen de ese estado se recargan automáticamente__.

Para ello vamos a crear un botón de aumente el contador y un método de aumentar:

```jsx
import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0
    };
  }

  aumentarContador = () => {
    // Importante no modificar directamente el estado, si no usar setState
    // y pasarle la clave del objeto a modificar y su nuevo valor
    this.setState({contador: this.state.contador + 1});
  }

  render() {
    return (
      {/* Como veíamos antes es necesario devolver un único elemento padre
      por eso usamos un div para agrupar lo demás elementos */}
      <div>
        <span>{this.state.contador}</span>
        {/* Al método onClick le asignamos un método.
        Importante poner la C de onClick en mayúsculas */}
        <button onClick={this.aumentarContador}>+</button>
      </div>
    );
  }
}

export default Contador;
```

Y para usarlo vamos a `App.js` e importamos nuestro componente y lo incluimos como se muestra a continuación.

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Importamos nuestro componente
import Contador from './Contador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <Contador/>
        </div>
      </div>
    );
  }
}

export default App;
```

Si todo ha ido bien veremos lo siguiente:

![Contador funcionando](./assets/contador.png)

 Y podrás comprobar que si pulsas sobre el botón el contador va aumentando. 👍

# 8. Conclusión

React es una gran propuesta de Facebook para solventar el diseño y la programación de interfaces complejas. Además nos permite reutilizar componentes, abstrae la manipulación directa del DOM y nos da la posibilidad de separar modularmente los componentes.

# 9. Referencias

* [React](https://facebook.github.io/react/)
* [React Native](https://facebook.github.io/react-native/)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
* [NodeJS](https://nodejs.org/en/)
* [Javascript Callbacks](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
