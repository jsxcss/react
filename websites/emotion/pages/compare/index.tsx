import { css } from '@emotion/react'
import { Box, Stack } from '@jsxcss/emotion'

const ComparePage = () => (
  <Stack.Vertical>
    <div>
      <h1>Verbose @emotion/react css</h1>
      <div
        css={css`
          font-size: 18px;
          @media (min-width: 768px) {
            font-size: 24px;
          }
          @media (min-width: 1440px) {
            font-size: 36px;
          }
        `}
      >
        Example Text
      </div>
    </div>

    <div>
      <h1>Concise @jsxcss/emotion css</h1>
      <Box fontSize={[18, 24, 36]}>Example Text</Box>
    </div>
  </Stack.Vertical>
)

export default ComparePage
