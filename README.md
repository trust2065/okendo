# Okendo

## Run

```cmd
  yarn
  yarn start
```

## Line between elements

I choose to create some div between elements and gives it `flex-grow: 1;`.

Other option will be creating svg, but it needs position, width of each elements. Using pure css is an easier approach.

## Styling

I choose styled-components since it's like using native css. And here we need some custom css and it's easier to use native css.

## Props type check on compile time

I use TypeScript to check props types

## Props type check on run time

`prop-types`

Extract constant values thanks to enum in TypeScript

`RankTypes, ButtonSelectorTypes, Colors, FontSize`

## Dropdown

I use "react-select" component and styling it to meet requirement
reference: <https://react-select.com/styles#provided-styles-and-state>

### TODO

1. functional test
2. react component test
