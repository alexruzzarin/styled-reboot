import { css } from 'styled-components';

const defaultOptions = {
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
};

const reboot = options => {
  const {
    fontFamilyBase,
    fontSizeBase,
    fontWeightBase,
    lineHeightBase,
    bodyColor,
    bodyBg,
    headingsMarginBottom,
    paragraphMarginBottom,
    dtFontWeight,
    linkColor,
    linkDecoration,
    linkHoverColor,
    linkHoverDecoration,
    tableCellPadding,
    textMuted
  } = Object.assign({}, defaultOptions, options);

  const rebootCss = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-family: sans-serif;
      line-height: 1.15;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
      display: block;
    }

    body {
      margin: 0;
      font-family: ${fontFamilyBase};
      font-size: ${fontSizeBase};
      font-weight: ${fontWeightBase};
      line-height: ${lineHeightBase};
      color: ${bodyColor};
      text-align: left;
      background-color: ${bodyBg};
    }

    [tabindex='-1']:focus {
      outline: none !important;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: ${headingsMarginBottom};
    }

    p {
      margin-top: 0;
      margin-bottom: ${paragraphMarginBottom};
    }

    abbr[title],
    abbr[data-original-title] {
      text-decoration: underline;
      text-decoration: underline dotted;
      cursor: help;
      border-bottom: 0;
    }

    address {
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
    }

    ol,
    ul,
    dl {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
    }

    dt {
      font-weight: ${dtFontWeight};
    }

    dd {
      margin-bottom: 0.5rem;
      margin-left: 0;
    }

    blockquote {
      margin: 0 0 1rem;
    }

    dfn {
      font-style: italic;
    }

    b,
    strong {
      font-weight: bolder;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    a {
      color: ${linkColor};
      text-decoration: ${linkDecoration};
      background-color: transparent;

      &:hover {
        color: ${linkHoverColor};
        text-decoration: ${linkHoverDecoration};
      }
    }

    a:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;

      &:focus,
      &:hover {
        color: inherit;
        text-decoration: none;
      }

      &:focus {
        outline: 0;
      }
    }

    pre,
    code,
    kbd,
    samp {
      font-family: monospace;
      font-size: 1em;
    }

    pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
      -ms-overflow-style: scrollbar;
    }

    figure {
      margin: 0 0 1rem;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }

    svg:not(:root) {
      overflow: hidden;
    }

    a,
    area,
    button,
    [role='button'],
    input:not([type='range']),
    label,
    select,
    summary,
    textarea {
      touch-action: manipulation;
    }

    table {
      border-collapse: collapse;
    }

    caption {
      padding-top: ${tableCellPadding};
      padding-bottom: ${tableCellPadding};
      color: ${textMuted};
      text-align: left;
      caption-side: bottom;
    }

    th {
      text-align: inherit;
    }

    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    button {
      border-radius: 0;
    }

    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    input[type='radio'],
    input[type='checkbox'] {
      box-sizing: border-box;
      padding: 0;
    }

    textarea {
      overflow: auto;
      resize: vertical;
    }

    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    legend {
      display: block;
      width: 100%;
      max-width: 100%;
      padding: 0;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      line-height: inherit;
      color: inherit;
      white-space: normal;
    }

    progress {
      vertical-align: baseline;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      outline-offset: -2px;
    }

    ::-webkit-file-upload-button {
      font: inherit;
    }

    output {
      display: inline-block;
    }

    summary {
      display: list-item;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none !important;
    }
  `;

  return rebootCss;
};

export default reboot;
