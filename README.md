# sp-func

Common Functions for Url, Validate, Ajax etc

***

## Install

### NPM

``` node
npm install --save sp-func
// or yarn add sp-func
```

### CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/sp-func/index.min.js"></script>
<script>
  __FUNC.serviceAPI(options = {
    url: '/',
    method: 'get',
    data: {},
    success: function () {},
    fail: function () {},
    headers: {}
  });
  __FUNC.serviceAPI({url: 'http://test.com/test.json'})
</script>
```

***

## Usage

```js
 //__FUNC: {serviceAPI, Validate, Url, Validate}
const __FUNC = require('sp-func')
```

### API Request

Based on [axios](https://github.com/axios/axios).

- **`serviceAPI (options = {})`**
  - options
    - `[url]`: `String`
    - `[method]`: `String`
    - `[data]`: `Object`
    - `[success]`: `Function`
    - `[fail]`: `Function`

```js
  __FUNC.serviceAPI({
    url: 'http://test.com/test.json',
    success: (res) => {
      console.log(res)
    }
  })
```

### Validate

- **`isEmail (email)`**
  - `email`: `String`

```js
  __FUNC.Validate.isEmail('test@test.com')
  //=> true
```

- **`isEqual (str, compare, isDeep)`**
  - `str`: `String`
  - `compare`: `String`
  - `[isDeep]`: `Boolean`

```js
  __FUNC.Validate.isEqual('123','123')
  //=> true

  __FUNC.Validate.isEqual('123',123,true)
    //=> false
```

Chinese IdCard Validate (length = 18)

- **`isIdCard (id)`**
  - `id`: `String`

```js

  __FUNC.Validate.isIdCard('51018419700106006X')
  //=> return {areaCode:510184,year:1970,month:01,day:06, gender:0}
  //Boolean(return) = true

  __FUNC.Validate.isIdCard('510184197001060060')
  //=> false
```

- **`isNumber (num, length)`**
  - `num`: `String`
  - `[length]`: `Number` default is `num.length`

```js

  __FUNC.Validate.isNumber('13619120030')
  //=> true

  __FUNC.Validate.isNumber('12132535x')
  //=> false

  __FUNC.Validate.isNumber('12132535x', 5)
  //=> true
```

Chinese PhoneNumber Validate (length = 11)

- **`isPhoneNumber (num)`**
  - `num`: `String`

```js

  __FUNC.Validate.isPhoneNumber('13619120030')
  //=> true

  __FUNC.Validate.isPhoneNumber('12132535')
  //=> false
```

- **`isEmpty (str)`**
  - `str`: `String`

```js

  __FUNC.Validate.isEmpty('')
  //=> true

  __FUNC.Validate.isEmpty('1')
  //=> false
```

### Url

- **`getParams (url, keyName)`**
  - `url`: `String`
  - `[keyName]`: `String`

```js
  __FUNC.Url.getParams('http://test.com/user?id=23&name=alice')
  //=> {id: 23, name: alice}

  __FUNC.Url.getParams('http://test.com/user?id=23&name=alice', 'name')
  //=> alice
```

### Storage

- **`setStorage (name, value, isSession)`**
  - `name`: `String`
  - `value`: `String`
  - `isSession`: `Boolean`

```js
  __FUNC.Storage.setStorage('age','18')
  //=> sessionStorage.age = 18

  __FUNC.Storage.setStorage('age','19', false)
  //=> localStorage.age = 19
```

- **`getStorage (name, isSession)`**
  - `name`: `String`
  - `isSession`: `Boolean`

```js
  __FUNC.Storage.getStorage('age')
  //=> sessionStorage.age = 18

  __FUNC.Storage.getStorage('age', false)
  //=> localStorage.age = 19
```

- **`Form.getData (name)`**
  - `name`: `String`

```js
  __FUNC.Form.getData('age')
  //=> 18
```

- **`Form.setData (name, value)`**
  - `name`: `String`
  - `value`: `String`

```js
  __FUNC.Form.setData('age', 21)
  __FUNC.Form.getData('age')
  //=> 21

## License

MIT
