// === === === === === === === === === === === === === === === ===
// COMMON PROPS
// === === === === === === === === === === === === === === === ===

// 0 ???
// 500 primary
// 1000 tertiary
export type Format = number;
export type FormatAlias = 'primary' | 'secondary' | 'tertiary';

// 0 xxs
// 500 md
// 1000 xxl
export type Size = number;
export type SizeAlias =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

// 0 minimal
// 500 outline
// 1000 common
export type Variant = number;
export type VariantAlias = 'common' | 'minimal' | 'outline';

// 0 red
// 500 yellow
// 1000 green
export type Status = number;
export type StatusAlias =
  | 'caution'
  | 'common'
  | 'negative'
  | 'positive';

// active
// animate
// attach
// automatic
// children
// className
// content
// disabled
// element
// floating
// fluid
// href
// icon
// loading
// messages
// selected
// shape
// status
// style
// target
// theme
// trigger
