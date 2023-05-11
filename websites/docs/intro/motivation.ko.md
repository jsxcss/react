---
sidebar_position: 1
title: 동기
---

## 아래 3가지 방법으로 Button을 만들어봅시다

`JSXCSS`와 [`@emotion/styled`](https://emotion.sh/docs/styled), [`@emotion/react's css`](https://emotion.sh/docs/css-prop)로 각각 Button 컴포넌트를 하나씩 만들어봅시다.

```tsx
type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children' | 'type'> & {
  isLoading?: boolean
}
```

### 1. JSXCSS의 Button

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

### 2. @emotion/styled의 Button

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

### 3. css prop(@emotion/react)의 Button

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

## 어떤 것이 가장 직관적인가요?

JSXCSS가 다른 방법보다 훨씬 짧은 코드로 직관적이고 선언적이게 레이아웃을 작성할 수 있지 않습니까?

### 이것이 JSXCSS를 만든 이유입니다

1. **Layout 컴포넌트 ([Box](/docs/emotion/src/layout-components/Box.i18n), [Flex](/docs/emotion/src/layout-components/Flex.i18n), [Stack](/docs/emotion/src/layout-components/Stack.i18n))**

   [Box](/docs/emotion/src/layout-components/Box.i18n), [Flex](/docs/emotion/src/layout-components/Flex.i18n), [Stack](/docs/emotion/src/layout-components/Stack.i18n) 등 선언적으로 레이아웃을 만들도록 지원합니다.

   ```tsx
   const NeedLayoutComponent = () => (
     <Stack.Vertical>
       <Flex.Center />
       <Box />
     </Stack.Vertical>
   )
   ```

2. **다형적인 [as prop](/docs/emotion/src/polymorphic/as-prop.i18n)**

   다형적인 as prop으로 div뿐 아니라 section, input, button등 어떠한 html tag로든 변환할 수 있습니다. 이것은 타입적으로도 안전하게 지원합니다. 또한 다른 애니메이션 라이브러리([framer-motion](https://www.framer.com/motion/), [react-spring](https://www.react-spring.dev/))과도 쉽게 통합이 가능합니다.

   ```tsx
   // Valid because href in a props
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

3. **반응형 css prop ([MediaQueryProvider](/docs/emotion/src/responsive/MediaQueryProvider.i18n), [useMediaQuery](/docs/emotion/src/responsive/useMediaQuery.i18n))**

   반응형 UI을 아주 쉽게 구현할 수 있습니다.

   ```tsx
   // As the width of the screen gets wider, the font size will gradually increase from 16px to 20px to 36px.
   const ResponsiveUI = () => <Box fontSize={[16, 20, 36]} />
   ```
