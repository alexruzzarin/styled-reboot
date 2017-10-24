# styled-reboot
Bootstrap 4 reboot.css for styled-components


[reboot.css from Bootstrap v4](https://github.com/twbs/bootstrap/blob/7b766e1ad53b0c22de42dac04d2472f287334e2a/scss/_reboot.scss) for
[styled-components](https://github.com/styled-components/styled-components).

Also see [styled-reset](https://github.com/zacanger/styled-reset/)
from [Zac Anger](https://github.com/zacanger)
&&
Also see [styled-normalize](https://www.npmjs.com/package/styled-normalize)
from [LestaD](https://github.com/LestaD).

--------

## Installation:

`npm i styled-reboot` (use the `-S` flag if you're on npm 4 or earlier).

## Usage:

```javascript
// base-styles.js
import { injectGlobal } from 'styled-components'
import reboot from 'styled-reboot'

const options = {
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSizeBase: '1rem',
  fontWeightBase: 'normal',
  lineHeightBase: 1.5,
  bodyColor: '#212529',
  bodyBg: '#fff',
  headingsMarginBottom: '.5rem',
  paragraphMarginBottom: '1rem',
  dtFontWeight: 'bold',
  linkColor: '#007bff',
  linkDecoration: 'none',
  linkHoverColor: '#0056b3',
  linkHoverDecoration: 'underline',
  tableCellPadding: '.75rem',
  textMuted: '#868e96'
}

const rebootCss = reboot(/* options */)

const baseStyles = () => injectGlobal`
  ${rebootCss}
  /* other styles */
`

export default baseStyles

// app.js
import baseStyles from './base-styles'

const App = () => {
  baseStyles()
  return (
    <div>Hi!</div>
  )
}

export default App
```

## Credits

All credit goes to Bootstrap for reboot.css.
Bootstrap is released under the MIT License.

## License:

[WTFPL](./LICENSE.md)
