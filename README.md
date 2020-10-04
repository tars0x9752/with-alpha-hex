# with-alpha-hex

A tiny TypeScript/JavaScript library which helps change/add alpha(opacity) of a css hexadecimal color.

- zero-dependency
- lightweight
- written in TypeScript
- returns a familiar hexadecimal color instead of a functional notation one.

## Helps what? / Why / When to use / Features

- Dynamically manipulate the alpha channel of the css color. (with CSS-in-JS in particular)
  - If you're using CSS-in-JS, and want to change alpha(opacity) of a css color dynamically but the opacity CSS property doesn't work for the case, this library helps.
- And this library keeps css colors in hexadecimal.
  - There are plenty of color manipulation library but most of them use functional notation color(Especially when using alpha).

## Installation

## Usage


## Styled-JSX Example
```tsx
import { withAlphaHex } from 'with-alpha-hex'

// ~~~~

const RandomComponent = () => {
  return (
    <div>
      <p className="random-text">{text}</p>
      <style jsx>{`
        .random-text {
          color: ${textColor}
          background: ${backgroundColor};
        }

        .random-text:hover {
          background: ${withAlphaHex(backgroundColor, 0.2)};
        }
      `}</style>
    </div>
  )
}
```

## License

[MIT](LICENSE)
