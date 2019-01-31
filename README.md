# setUrlParameter

## Installation

```
npm install seturlparameter
```
## Usage
```
const setUrlParameter = require('seturlparameter');

const url = 'https://www.example.com/index.html?aaa=bbb&ccc=ddd';
let key = 'eee';
const value = 'fff';

const urlWithNewParam = setUrlParameter(url, key, value);

console.log(urlWithNewParam); // result is: 'https://www.example.com/index.html?aaa=bbb&ccc=ddd&eee=fff'

key = 'aaa';
const urlWithReplacedParam = setUrlParameter(url, key, value);

console.log(urlWithReplacedParam); // result is: 'https://www.example.com/index.html?aaa=fff&ccc=ddd'

```
