import { css, FlattenSimpleInterpolation } from 'styled-components';

interface IRebootOptions {
  black?: string;
  fontFamilyBase?: string;
  fontFamilyMonospace?: string;
  fontSizeBase?: string;
  fontWeightBase?: number | string;
  fontWeightBolder?: number | string;
  lineHeightBase?: number;
  bodyColor?: string;
  bodyBg?: string;
  headingsMarginBottom?: string;
  paragraphMarginBottom?: string;
  labelMarginBottom?: string;
  dtFontWeight?: number | string;
  linkColor?: string;
  linkDecoration?: string;
  linkHoverColor?: string;
  linkHoverDecoration?: string;
  tableCellPadding?: string;
  tableCaptionColor?: string;
  enablePointerCursorForButtons: boolean;
}

export const defaultRebootOptions: IRebootOptions = {
  black: '#000',
  bodyBg: '#fff',
  bodyColor: '#212529',
  dtFontWeight: 700,
  enablePointerCursorForButtons: true,
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: '1rem',
  fontWeightBase: 400,
  fontWeightBolder: 'bolder',
  headingsMarginBottom: '0.5rem',
  labelMarginBottom: '0.5rem',
  lineHeightBase: 1.5,
  linkColor: '#007bff',
  linkDecoration: 'none',
  linkHoverColor: '#0056b3',
  linkHoverDecoration: 'underline',
  paragraphMarginBottom: '1rem',
  tableCaptionColor: '#6c757d',
  tableCellPadding: '0.75rem'
};

export const reboot = (options: IRebootOptions): FlattenSimpleInterpolation => {
  const {
    black,
    fontFamilyBase,
    fontFamilyMonospace,
    fontSizeBase,
    fontWeightBase,
    fontWeightBolder,
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
    tableCaptionColor,
    labelMarginBottom,
    enablePointerCursorForButtons
  } = { ...defaultRebootOptions, ...options };

  const rebootCss = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-family: sans-serif;
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(${black}, 0);
    }

    article,
    aside,
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
      outline: 0 !important;
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
      text-decoration-skip-ink: none;
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

    b,
    strong {
      font-weight: ${fontWeightBolder};
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

      &:hover,
      &:focus {
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
      font-family: ${fontFamilyMonospace};
      font-size: 1em;
    }

    pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
    }

    figure {
      margin: 0 0 1rem;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }

    svg {
      overflow: hidden;
      vertical-align: middle;
    }

    table {
      border-collapse: collapse;
    }

    caption {
      padding-top: ${tableCellPadding};
      padding-bottom: ${tableCellPadding};
      color: ${tableCaptionColor};
      text-align: left;
      caption-side: bottom;
    }

    th {
      text-align: inherit;
    }

    label {
      display: inline-block;
      margin-bottom: ${labelMarginBottom};
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

    select {
      word-wrap: normal;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
    }

    ${enablePointerCursorForButtons &&
      css`
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          &:not(:disabled) {
            cursor: pointer;
          }
        }
      `}

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    input[type='radio'],
    input[type='checkbox'] {
      box-sizing: border-box;
      padding: 0;
    }

    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
      -webkit-appearance: listbox;
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
      -webkit-appearance: none;
    }

    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      font: inherit;
      -webkit-appearance: button;
    }

    output {
      display: inline-block;
    }

    summary {
      display: list-item;
      cursor: pointer;
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
