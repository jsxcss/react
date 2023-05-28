import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react'
import { Flex, Stack } from '@jsxcss/emotion'
import { AnimatePresence, motion } from 'framer-motion'
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
    whileTap={{ scale: 0.96, opacity: 0.8 }}
    whileHover={{ scale: 0.98, opacity: 0.9 }}
    borderRadius={12}
    borderStyle="none"
    padding={[16, 18, 20]}
    backgroundColor={['#007bff', '#007bff', '#007bff']}
    cursor="pointer"
    position="relative"
    flex={1}
    {...rest}
  >
    <Flex.Center position="absolute" top={0} left={20} bottom={0}>
      <AnimatePresence>{loading && <Spinner />}</AnimatePresence>
    </Flex.Center>
    <Flex.Center flex={1} fontSize={[16, 18, 20]} color="white" fontWeight="bold">
      {children}
    </Flex.Center>
  </Stack>
))
