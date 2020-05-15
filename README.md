# REACT-IMAGE-RESOLVER

Resolve the image name or path of a react project. If you update or change any image file in react project, not need to change it every where in project.(i.e - ext name , file name , file path , dir)

- Easy to use API
- Easy to install

## Versions-

`react-image-resolver` has released version `0.1.0`.

It is still able to use with `react-image-resolver@0.1.0`

```js
// v0.1.0
const Resolver = require("react-image-resolver");
```

## Quick Start

- [As Library](#library)
- [Usage](#usage)

## Library

### Installation

```
npm i --save react-image-resolver
```

### react-image-resolver using a Object.

```js
const { Resolver } = require("react-image-resolver");
const { IMAGE_CONST } = require("./constant");

global.IMAGE_PATH = new Resolver(IMAGE_CONST); //set Resolver() global

console.log(IMAGE_PATH.imageName("LOGO")); //=> /assests/images/logo.png
console.log(IMAGE_PATH.imageName("LEFT")); //=> /assests/images/left-arrow.png
console.log(IMAGE_PATH.imageName("UPDATE")); //=> /assests/images/update.png
```
### react-image-resolver using a ReactDOM.
```js
ReactDOM.render(
  <div>
    <img src={IMAGE_PATH.imageName("LOGO")} alt="logo" />
  </div>,
  document.getElementById("app")
);
```

```js
constant.js
/*You can categries the image  on the basis of usges-*/
export const IMAGE_CONST = {
  basePath: {
    path: "/assets/images/"
  },
  image: {
    MISC:{
        ACTIONS:{
            ADD:'add.png',
            DELETE:'delete.png',
            CLOSE:'close.png',
            UPDATE:'modify.png'
       },
       ARROW:{
           LEFT:'left-arrow.png',
           RIGHT:'right-arrow.png',
           TOP:'top-arrow.png',
           BOTTOM:'bottom-arrow.png'
       }
    }
    LOGIN: "login.png",
    REGISTER: "register.webp",
    LOGO: "logo.png"
  }
};
```

### Usage-

- Initialize the IMAGE constant to the `new Resolver()` .
- You can use it directly in any `.js|.jsx` file or set `global` var .
- Using the `global` var, you can access it anywhere .
- assign the base path in the constant in as same `basePath` .

        basePath:{
            path:'/assets/images/'
        }
