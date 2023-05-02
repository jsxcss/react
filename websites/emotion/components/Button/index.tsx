import { css } from '@emotion/react'
import { Flex, Stack } from '@jsxcss/emotion'
import { AnimatePresence, motion } from 'framer-motion'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'
import { Spinner } from '../Spinner'

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<
    Pick<ComponentPropsWithoutRef<'button'>, 'onClick'> & {
      loading?: boolean
    }
  >
>(({ children, loading = false, ...rest }, ref) => (
  <Stack
    direction="horizontal"
    as={motion.button}
    ref={ref}
    whileTap={{ scale: 0.92, backgroundColor: 'rgb(46, 0, 90)' }}
    whileHover={{ scale: 0.98, opacity: 0.86 }}
    borderRadius={12}
    borderStyle="none"
    padding={16}
    css={css`
      background-color: blueviolet;
      cursor: pointer;
      position: relative;
      flex: 1;
    `}
    {...rest}
  >
    <Flex.Center css={{ position: 'absolute', top: 0, left: 20, bottom: 0 }}>
      <AnimatePresence>{loading && <Spinner />}</AnimatePresence>
    </Flex.Center>
    <Flex.Center css={{ flex: 1, fontSize: 16, color: 'white' }}>{children}</Flex.Center>
  </Stack>
))
