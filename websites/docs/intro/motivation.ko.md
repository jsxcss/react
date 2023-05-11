---
sidebar_position: 1
title: 동기
---

## 컴포넌트를 만드는 다른 방법과 비교

`jsxcss`와 [`@emotion/styled`](https://emotion.sh/docs/styled), [`@emotion/react's css`](https://emotion.sh/docs/css-prop)로 각각 Button 컴포넌트를 하나씩 만들어봅시다.

#### ButtonProps

```tsx
type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children' | 'type'> & {
  isLoading?: boolean
}
```

### 1. @emotion/styled

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

### 2. @emotion/react's css

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

### 3. JSXCSS

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

## 어떤 것이 가장 직관적인가요?

이것이 jsxcss를 만든 이유입니다.
