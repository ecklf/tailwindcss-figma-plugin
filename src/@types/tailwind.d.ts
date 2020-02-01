export interface TailwindConfig {
  prefix?: string;
  important?: boolean;
  separator?: string;
  theme: Theme;
  variants: KeyConfig;
  corePlugins?: KeyConfig;
  plugins: string[];
}

export interface KeyConfig {
  [key: string]: string | { [key: string]: string };
}

export interface Theme {
  extend?: Theme;
  screens?: KeyConfig;
  colors?: KeyConfig;
  spacing?: KeyConfig;
  backgroundPosition?: KeyConfig;
  backgroundSize?: KeyConfig;
  borderRadius?: KeyConfig;
  borderWidth?: KeyConfig;
  boxShadow?: KeyConfig;
  container?: KeyConfig;
  cursor?: KeyConfig;
  fill?: KeyConfig;
  flex?: KeyConfig;
  flexGrow?: KeyConfig;
  flexShrink?: KeyConfig;
  fontFamily?: KeyConfig;
  fontSize?: KeyConfig;
  fontWeight?: KeyConfig;
  inset?: KeyConfig;
  letterSpacing?: KeyConfig;
  lineHeight?: KeyConfig;
  listStyleType?: KeyConfig;
  maxHeight?: KeyConfig;
  minHeight?: KeyConfig;
  minWidth?: KeyConfig;
  objectPosition?: KeyConfig;
  opacity?: KeyConfig;
  order?: KeyConfig;
  stroke?: KeyConfig;
  strokeWidth?: KeyConfig;
  zIndex?: KeyConfig;
  rowGap?: KeyConfig;
  columnGap?: KeyConfig;
  gridTemplateColumns?: KeyConfig;
  gridColumn?: KeyConfig;
  gridColumnStart?: KeyConfig;
  gridColumnEnd?: KeyConfig;
  gridTemplateRows?: KeyConfig;
  gridRow?: KeyConfig;
  gridRowStart?: KeyConfig;
  gridRowEnd?: KeyConfig;
  transformOrigin?: KeyConfig;
  scale?: KeyConfig;
  rotate?: KeyConfig;
  skew?: KeyConfig;
  transitionProperty?: KeyConfig;
  transitionTimingFunction?: KeyConfig;
  transitionDuration?: KeyConfig;
}
