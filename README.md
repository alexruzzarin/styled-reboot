# styled-reboot
Bootstrap 4 reboot.css for styled-components


[reboot.css from Bootstrap v4](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss) for
[styled-components](https://github.com/styled-components/styled-components).

Also see [styled-reset](https://github.com/zacanger/styled-reset/)
from [Zac Anger](https://github.com/zacanger)
&&
also see [styled-normalize](https://www.npmjs.com/package/styled-normalize)
from [LestaD](https://github.com/LestaD).

--------

## Installation:

`npm i styled-reboot` (use the `-S` flag if you're on npm 4 or earlier).

## Usage:

```javascript
// base-styles.js
import { injectGlobal } from 'styled-components';
import reboot from 'styled-reboot';

// Options are optional, these are the default options
const options = {
  black: '#000',
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: '1rem',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: '#212529',
  bodyBg: '#fff',
  headingsMarginBottom: '0.5rem',
  paragraphMarginBottom: '1rem',
  labelMarginBottom: '0.5rem',
  dtFontWeight: 700,
  linkColor: '#007bff',
  linkDecoration: 'none',
  linkHoverColor: '#0056b3',
  linkHoverDecoration: 'underline',
  tableCellPadding: '0.75rem',
  textMuted: '#6c757d'
};

const rebootCss = reboot(/* options */);

const baseStyles = () => injectGlobal`
  ${rebootCss}
  /* other styles */
`;

export default baseStyles;

// app.js
import baseStyles from './base-styles';

const App = () => {
  baseStyles()
  return (
    <div>Hi!</div>
  )
};

export default App;
```

You can also use named imports:

```javascript
// ES Modules
import { reboot } from 'styled-reboot';

// CommonJS
const { reboot } = require('styled-reboot');
```


## Credits

All credit goes to Bootstrap for reboot.css.
Bootstrap is released under the MIT License.

## License:

[MIT](./LICENSE.md)
