---
sidebar_position: 1
title: 동기
---

### 만약 @emotion/styled를 사용해 Button 컴포넌트를 만든다고 가정해봅시다.

```tsx
import styled from '@emotion/styled'

const Container = styled.button`
  display: flex;
`
const TextWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryText};
`
const LoadingWrapper = styled.div`
  display: flex;
`

type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children'> & {
  isLoading: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => {
  return (
    <Container ref={ref} {...rest}>
      {isLoading && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}
      <TextWrapper>{children}</TextWrapper>
    </Container>
  )
})
```

### 그럼 만약 @emotion/react의 css를 사용해 Button 컴포넌트를 만든다고 가정해봅시다.

```tsx
import { css, useTheme } from '@emotion/react'

type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children'> & {
  isLoading: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => {
  const theme = useTheme()

  return (
    <button
      ref={ref}
      css={css`
        display: flex;
      `}
      {...rest}
    >
      {isLoading && (
        <div
          css={css`
            display: flex;
          `}
        >
          <Spinner />
        </div>
      )}
      <div
        css={css`
          display: flex;
          color: ${theme.colors.primaryText};
        `}
      >
        {children}
      </div>
    </button>
  )
})
```

### 그럼 만약 @jsxcss/emotion을 사용해 Button 컴포넌트를 만든다고 가정해봅시다.

아래와 같이 만들 컴포넌트에 집중하고 나머지를 @jsxcss/emotion의 인터페이스에 맡기면 어떨까요?

```tsx
import { Stack, Flex } from '@jsxcss/emotion'
import { useTheme } from '@emotion/react'

type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children'> & {
  isLoading: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, isLoading, ...rest }, ref) => {
  const theme = useTheme()

  return (
    <Stack.Horizontal as="button" ref={ref} {...rest}>
      {isLoading && (
        <Flex.Center>
          <Spinner />
        </Flex.Center>
      )}
      <Flex.Center color={theme.colors.primaryText}>{children}</Flex.Center>
    </Stack.Horizontal>
  )
})
```
