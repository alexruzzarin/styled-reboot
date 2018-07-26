import { InterpolationValue } from 'styled-components';

interface RebootOptions {
  black?: string;
  fontFamilyBase?: string;
  fontFamilyMonospace?: string;
  fontSizeBase?: string;
  fontWeightBase?: number;
  lineHeightBase?: number;
  bodyColor?: string;
  bodyBg?: string;
  headingsMarginBottom?: string;
  paragraphMarginBottom?: string;
  labelMarginBottom?: string;
  dtFontWeight?: number;
  linkColor?: string;
  linkDecoration?: string;
  linkHoverColor?: string;
  linkHoverDecoration?: string;
  tableCellPadding?: string;
  textMuted?: string;
}

declare function reboot(options?: RebootOptions): InterpolationValue;

export { reboot };
export default reboot;
