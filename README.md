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
 //__FUNC: {serviceAPI}
const __FUNC = require('sp-fe-func')
```

### API Request

Based on [axios]("https://github.com/axios/axios").

- **`serviceAPI (options = {})`**
  - options
    - `[url]`: `/`
    - `[method]`: `get`, post
    - `[data]`: {keyword: 'test'}
    - `[success]`: function (res) { console.log(res) }
    - `[fail]`: function (err) { console.log(err) }

```js
  __FUNC.serviceAPI({
    url: 'http://test.com/test.json',
    success: (res) => {
      console.log(res)
    }
  })
```

## License

MIT
