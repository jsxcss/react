import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Flex, Stack } from '@jsxcss/emotion'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Spinner } from '../../components'

const ComparePage = () => (
  <Stack.Vertical spacing={30}>
    <div>
      <div>
        <h1>Verbose @emotion/react css</h1>
        <div
          css={css`
            font-size: 18px;
            @media (min-width: 768px) {
              font-size: 20px;
            }
            @media (min-width: 1440px) {
              font-size: 24px;
            }
          `}
        >
          Example Text
        </div>
      </div>
      <div>
        <h1>Concise @jsxcss/emotion css</h1>
        <Box fontSize={[18, 20, 24]}>Example Text</Box>
      </div>
    </div>

    <Stack spacing={16} border="1px solid #0051ff" borderRadius={12} padding={16}>
      <Box as="h3">Button Compare</Box>
      <Stack.Horizontal spacing={16}>
        <StyledButton>StyledButton</StyledButton>
        <CSSButton>CSSButton</CSSButton>
        <JSXCSSButton>JSXCSSButton</JSXCSSButton>
      </Stack.Horizontal>
    </Stack>
  </Stack.Vertical>
)

export default ComparePage

type ButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children' | 'type'> & {
  isLoading?: boolean
}

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
