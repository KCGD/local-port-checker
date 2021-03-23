# local-port-checker

This is a simple tool to check if a port is open on your computer

## Installation

use npm

```npm
npm -i local-port-checker
```

## Usage

```js
var check = require("local-port-checker");

check(80, function(isUsed){
     if(isUsed){
          //port is in use
     } else {
          //port is not in use
     }
});
```

## Contributing
idk how to use guthub lmao

if you make a new version just credit me somewhere

## License
[MIT](https://choosealicense.com/licenses/mit/)
