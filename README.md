# sp-fe-func
Common Function for Dev.

***

## Install

### NPM

``` node
npm install --save sp-fe-func
// or yarn add sp-fe-func
```

### CDN

```html
<script src="https://unpkg.com/sp-fe-func/index.min.js"></script>
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
const __FUNC = require('sp-fe-func')
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

## License

MIT
