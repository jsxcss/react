---
sidebar_position: 1
title: Motivation
---

## Let's make Button with below 3 ways

`JSXCSS` and [`@emotion/styled`](https://emotion.sh/docs/styled), [`@emotion/react's css`](https://emotion.sh/docs/css-prop) Let's create one Button component for each.

```tsx
type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children' | 'type'> & {
  isLoading?: boolean
}
```

### 1. Button of JSXCSS

```tsx
const JSXCSSButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => (
  <Stack.Horizontal
    as={motion.button}
    whileHover={{
      scale: 0.98,
      cursor: 'pointer',
    }}
    type="button"
    spacing={16}
    padding={[12, 16, 18]}
    borderRadius={[12, 16, 18]}
    backgroundColor="#0051ff"
    border="none"
    ref={ref}
    {...rest}
  >
    {isLoading && (
      <Flex.Center>
        <Spinner />
      </Flex.Center>
    )}
    <Flex.Center fontSize={[18, 20, 24]}>{children}</Flex.Center>
  </Stack.Horizontal>
))
```

### 2. Button of @emotion/styled

```tsx
const ButtonContainer = styled(motion.button)`
  display: flex;
  align-items: stretch;
  gap: 16px;
  padding: 12px;
  border-radius: 12px;
  background-color: #0051ff;
  border: none;
  @media (min-width: 768px) {
    padding: 16px;
    border-radius: 16px;
  }
  @media (min-width: 1440px) {
    padding: 18px;
    border-radius: 18px;
  }
`
const ButtonTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: cetner;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`
const ButtonLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: cetner;
`

const StyledButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => {
  return (
    <ButtonContainer
      ref={ref}
      {...rest}
      whileHover={{
        scale: 0.98,
        cursor: 'pointer',
      }}
    >
      {isLoading && (
        <ButtonLoadingWrapper>
          <Spinner />
        </ButtonLoadingWrapper>
      )}
      <ButtonTextWrapper>{children}</ButtonTextWrapper>
    </ButtonContainer>
  )
})
```

### 3. Button of css prop(@emotion/react)

```tsx
const CSSButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => (
  <motion.button
    type="button"
    whileHover={{
      scale: 0.98,
      cursor: 'pointer',
    }}
    ref={ref}
    css={css`
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border-radius: 16px;
      background-color: #0051ff;
      border: none;
      @media (min-width: 768px) {
        padding: 16px;
        border-radius: 16px;
      }
      @media (min-width: 1440px) {
        padding: 18px;
        border-radius: 18px;
      }
    `}
    {...rest}
  >
    {isLoading && (
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: cetner;
        `}
      >
        <Spinner />
      </div>
    )}
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: cetner;
        font-size: 18px;
        @media (min-width: 768px) {
          font-size: 20px;
        }
        @media (min-width: 1440px) {
          font-size: 24px;
        }
      `}
    >
      {children}
    </div>
  </motion.button>
))
```

## Which one is the most intuitive?

Doesn't JSXCSS allow you to write layouts intuitively and declaratively with much shorter code than other methods?

### It's why we made JSXCSS

1. **Layout components ([Box](/docs/emotion/src/layout-components/Box.i18n), [Flex](/docs/emotion/src/layout-components/Flex.i18n), [Stack](/docs/emotion/src/layout-components/Stack.i18n))**

   Supports declarative layouts such as [Box](/docs/emotion/src/layout-components/Box.i18n), [Flex](/docs/emotion/src/layout-components/Flex.i18n) and [Stack](/docs/emotion/src/layout-components/Stack.i18n).

   ```tsx
   const NeedLayoutComponent = () => (
     <Stack.Vertical>
       <Flex.Center />
       <Box />
     </Stack.Vertical>
   )
   ```

2. **Polymorphic [as prop](/docs/emotion/src/polymorphic/as-prop.i18n)**

   With polymorphic as prop, all components can be converted to any html tag, such as section, input, button, as well as div. This is also type-safe. also be easily integrated with other animation libraries ([framer-motion](https://www.framer.com/motion/), [react-spring](https://www.react-spring.dev/)).

   ```tsx
   const TypesafeAsProp = () => (
     <>
       <Box
         as="a"
         href="https://example.com" // no error
       />
       <Box
         as="div" // div have no href prop
         href="https://example.com" // type-safely, error will occured
       />
     </>
   )

   import { motion } from 'framer-motion'
   const IntegrationWith3rdParty = () => (
     <Box
       as={motion.div} // Integration with 3rd party library
       whileTap={{ scale: 1.2 }} // type-safely, you can use props of as component
     />
   )
   ```

3. **Responsive css prop ([MediaQueryProvider](/docs/emotion/src/responsive/MediaQueryProvider.i18n), [useMediaQuery](/docs/emotion/src/responsive/useMediaQuery.i18n))**

   Responsive UI can be implemented very easily.

   ```tsx
   // As the width of the screen gets wider, the font size will gradually increase from 16px to 20px to 36px.
   const ResponsiveUI = () => <Box fontSize={[16, 20, 36]} />
   ```
