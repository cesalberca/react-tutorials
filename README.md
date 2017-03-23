# React tutorial - Autentia

[React](https://facebook.github.io/react/) es una librería para crear interfaces de usuarios. Ni más ni menos. Creada en Facebook en 2011 por Jordan Walke y liberada como open source en 2013, cuenta con proyectos en producción por compañías como Netflix, Airbnb, Walmart, Facebook e Instagram. Sus más notables propuestas son:

* Propagación de datos unidireccional

    Los datos son propagados de __componentes padres a componentes hijos__. La comunicación entre padres e hijos se hace mediante __callbacks__ y los eventos son propagados de hijos a padres, siendo los componentes padre los que gestionan el estado y la lógica.

* DOM Virtual

    React genera una estructura en memoria semejante al DOM físico. Cuando detecta algún cambio compara entre el DOM virtual y el DOM físico y sólamente recarga aquello que haya cambiado y que sea visible para el usuario. Ésta innovación hace obsoleto el tener que recargar la página entera cada vez que el estado es modificado.

* JSX

    JSX es una extensión de la sintaxis de Javascript comúnmente usada para codificar los componentes. Es semejante a html y se embebe en los ficheros `.js`.

* Aplicaciones isomórficas

    Esto quiere decir que las aplicaciones web se pueden renderizar tanto en el cliente como en el servidor.

* React Native

    Facebook lanzó en 2015 [React Native](https://facebook.github.io/react-native/), el cual permite crear componentes usando herramientas de desarollo web y que genera aplicaciones __nativas__ tanto para _Android_ como para _IOS_.

## Instalación

React, como se ha mencionado antes es una librería de Javascript. React necesita de dos paquetes: React y ReactDOM. El paquete de React se encarga de manejar todo el estado mientras que el paquete de ReactDOM se encarga de la renderización en web. Está diseñado así para poder cambiar la implementación de renderización, como por ejemplo para renderizar los componentes en aplicaciones móviles con React Native.

Para poder hacer uso de éstas librerías se pueden tomar varios caminos:

1. Descargar manualmente e incluirla en nuestro html
    ```html
    <script src="./dist/react.js"></script>
    <script src="./dist/react-dom.js"></script>
    ```
2. Usar la CDN provista por [unpkg](https://unpkg.com)
    ```html
    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    ```
3. Usar un package manager como [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para realizar la instalación y la gestión de dependencias
    ```
    npm install --save react react-dom
    ```

    `--save es para guardar como dependencia en nuestro package.json`.

La opción más comunmente usada es la 3ª, con npm, el gestor de paquetes de Javascript.

Ya que no sólamente necesitamos instalar las dependencias sino que tendremos que configurar todo el proyecto vamos a usar [Create React App](https://github.com/facebookincubator/create-react-app) para crear una aplicación web de React lista para ser usada, sin necesidad de configurar nada.

Unicamente necesitaremos instalar en nuestra máquina [NodeJS](https://nodejs.org/en/) (Versión 7.7.4).

Una vez instalado NodeJS pasaremos a descargar la utilidad de `create-react-app`. Para ello abrimos terminal y seguimos estos comandos:

```
npm install -g create-react-app

create-react-app react-tutorial
cd react-tutorial/
npm start
```

`-g quiere decir que instalaremos globalmente create-react-app. Esto es necesario ya que create-react-app genera toda una aplicación y por ello se usa globalmente.`

Si todo ha ido bien veremos la siguiente pantalla:

![Create React App ejecutándose](https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67)

¿Qué es lo que ha hecho create-react-app?

Create React App ha generado y dispuesto una estructura de ficheros de la siguiente forma:

```
react-tutorial/
  README.md
  node_modules/ // Librerías de nuestra aplicación
  package.json // Información y dependencias de nuestro proyecto
  .gitignore  // Fichero donde se determina qué carpetas no deberán ser trackeadas con git
  public/
    favicon.ico // Icono de la app
    index.html // Página donde se inyectarán los componentes de React
  src/ // Directorio de desarollo
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Las ventajas de usar esta utilidad son las siguientes:

* Soporte de sintaxis para React, JSX, ES6, y Flow.
* Extras de lenguaje más allá de ES6, como [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator).
* Servidor de desarrollo que captura los errores más comunes.
* Importar imágenes y css desde Javascript
* Autoprefijar css para temas de compatibilidad.
* Un build system para generar ficheros listos para producción, minificados y con sourcemaps.

De todas maneras, si deseamos configurar nosotros mismos el entorno de desarollo podemos hacer en cualquier momento `npm run eject`. Ésta acción es irreversible, con lo que hay que estar seguro de ello.
