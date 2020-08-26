[![CircleCI](https://circleci.com/gh/alexruzzarin/styled-reboot.svg?style=svg&circle-token=b24a76575acba70150e3b06340a67d54747643d0)](https://circleci.com/gh/alexruzzarin/styled-reboot)

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

`npm i styled-reboot`

## Usage with styled-components v4 or v5:

```javascript
// app.js
import * as React from 'react';
import { Reboot } from 'styled-reboot';

const App = () => (
  <>
    <Reboot />
    <div>Hi, I'm an app!</div>
  </>
);

export default App;
```

Or you can create your own global style (Don't forget to create a theme, or extend ours! We provide a few defaults.):

```javascript
// app.js
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reboot, defaultRebootTheme } from 'styled-reboot';

const GlobalStyle = createGlobalStyle`
  ${reboot}
  /* other styles */
`;

const App = () => (
  <ThemeProvider theme={defaultRebootTheme}>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </ThemeProvider>
};

export default App;
```

## Credits

All credit goes to Bootstrap for reboot.css.
Bootstrap is released under the MIT License.

## License:

[MIT](./LICENSE.md)
