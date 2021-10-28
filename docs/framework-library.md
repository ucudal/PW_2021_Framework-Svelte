
# Bienvenido al maravilloso mundo de Svelte! 🙌✨

![Gif de Alf tocando en su banda](https://media.giphy.com/media/KY41NM9XNzWy4/giphy.gif)

Antes de contarte de qué trata todo ésto, vamos a profundizar en un **concepto importante** para ubicar a *Svelte* en el mapa informático 🧑🏻‍💻.


## Framework o Librería? Esa es la cuestión 🤔

Como informáticos nos puede haber pasado de utilizar este término indistintamente, pensando que significan lo mismo o no pensando nada de nada... *(cosas que pasan)*.
![Gif de Alf con cara de shock](https://media.giphy.com/media/yEtv1wWZpmG2s/giphy.gif)

La verdad de la milanesa 🥩 es que en la base, tanto un *framework* como una *librería*, son maravillosos bloques de código reutilizables desarrollados por humanos como nosotros. (Pero más 🚀).

Aunque **sí que hay una diferencia**, sutil o no sutil, entre ellos y **radica en quién está al mando, quién es el que lleva el control.**

## Inversión de control 🔄 🎮

  > 💡Este concepto es el diferencial entre una librería y un framework.

### Librerías
Cuando utilizamos una `librería`, accedemos a un conjunto de funcionalidades que **nosotros mismos decidimos cuándo invocar**.

Por ejemplo, las incontables veces que utilizamos la librería `java.lang.Math` o `java.util.Date` al trabajar con el lenguaje *Java* en las clases del *Sr. Ocampo*, importábamos la librería y nosotros definíamos cuando utilizábamos alguna de sus funciones. Dicho de otra manera, si se importaba una librería y no se invocaba ningún método, no ocurría nada 🤷🏻‍♀️.

> En definitiva, **al utilizar `librerías` es uno el que tiene el control** 😎.

![Gif de Alf filmando con una cámara](https://media.giphy.com/media/7J1llSYGJhKQJpVS9V/giphy.gif)

### Framework
Para el que ya haya experimentado con algún `framework` en particular (React, Vue, etc. etc), puede darse cuenta ahora que las capacidades de éstos van más allá de nuestras indicaciones directas.

Los `frameworks` nos permiten abstraernos de lo que sucede en realidad y nos brindan funcionalidades que nosotros debemos configurar tal y como nos son solicitados. **Cuándo es que se terminan invocando las funciones que configuramos, no lo controlamos nosotros, sino el mismo `framework.`** Éste es el encargado de llamar por detrás a las funciones que nos pidió configurar con esos parámetros de entrada, y nosotros estamos abstraidos totalmente de cuándo eso sucede.

> **Cuando utilizamos `frameworks`, ellos son los que tienen el control, nosotros somos espectadores.**

![Gif de Alf mirando una película](https://media.giphy.com/media/Jn6UleOajZxAY/giphy.gif)

## Qué es Svelte?
Svelte es un `framework` que permite componetizar las interfaces de usuario de entornos web. Dicho de otra manera, **brinda la capacidad de convertir partes de la UI en piezas reutilizables.** 

El hecho de que sea un `framework`, como ya comprendimos, nos permite darnos cuenta que Svelte va a estar al mando de nuestra web en lo que a UI se refiere. Si queremos hacer uso de él, vamos a tener que configurarlo para el proyecto y brindarle el input que nos solicita para los distintos tipos de elementos de la web.

La interesante diferencia de Svelte con respecto a los otros frameworks conocidos, es que **no maneja un Virtual DOM para actualizar la UI** ya que no es un `framework` que funcione en tiempo de ejecución (interpretado), sino que es compilado. Esto le permite manejar lógica de actualización del DOM de forma imperativa, indicando directamente lo que debe ser cambiado. De esta manera *mejora sustancialmente la performance de la página web, sobre todo de las más exigentes.*
