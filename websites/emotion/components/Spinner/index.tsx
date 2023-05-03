import { Box } from '@jsxcss/emotion'
import { motion } from 'framer-motion'

export const Spinner = () => (
  <motion.div initial={{ x: -20, scale: 0 }} animate={{ x: 0, scale: 1 }} exit={{ x: -20, scale: 0 }}>
    <Box
      as={motion.div}
      width={12}
      height={12}
      animate={{
        scale: [1, 1.2, 1, 1.2, 1],
        rotate: [0, 180, 360],
        transition: { repeat: Infinity, duration: 1, ease: 'linear' },
      }}
      exit={{ scale: 0 }}
      borderWidth={1}
      borderColor="white"
      borderRadius="50%"
      borderStyle="solid"
      borderTop="none"
      borderRight="none"
      margin="8px auto"
    />
  </motion.div>
)
