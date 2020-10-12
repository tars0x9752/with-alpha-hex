# with-alpha-hex

A tiny TypeScript/JavaScript library which helps change/add alpha(opacity) of a css hexadecimal color.

- zero-dependency
- lightweight
- written in TypeScript
- returns a familiar hexadecimal color instead of a functional notation one.

## 🤨 What is this?

This is a library for those who use CSS-in-JS and prefer to use `#RRGGBB[AA]` style css color rather than functional notation color such as `rgb()` or `hsl()` and want to make the alpha channel dynamic.

There are plenty of color manipulation library but most of them output functional notation colors(Especially when using alpha).

## 🤔 Ok, How to use then?

It's fairly simple. :) A quick instruction goes below.

## 💻 Installation

```sh
npm i with-alpha-hex
# or
yarn add with-alpha-hex
```

> The library is TypeScript-ready and has zero-dependency. :)

## 🎈 Usage

```ts
import { withAlphaHex } from 'with-alpha-hex'

const textColor = '#000'

const weakTextColor = withAlphaHex(textColor, 0.4) // #00000066

const primaryColor = '#14B1AB'

const weakPrimaryColor = withAlphaHex(primaryColor, 0.2) // #14B1AB33
```

## Wait, what are those 8-digit hexadecimal color thingy?

In CSS Color Module Level 4, You can use `#RRGGBBAA` color which has an alpha channel value.

![sample](https://user-images.githubusercontent.com/46079709/95020082-ee288180-06a3-11eb-822c-eab34d01d5be.png)

## ✨ With Styled-JSX

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
