import { useMediaQuery } from '@jsxcss/emotion'
import { Button } from '../../components'

const MediaQueryPage = () => {
  const mediaQuery = useMediaQuery() // MediaQueryProvider is required in parent component

  return (
    <div css={mediaQuery({ display: 'flex', flexDirection: ['column', 'column', 'row'], gap: [16, 16, 0] })}>
      <section
        css={mediaQuery({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 100,
          minWidth: [undefined, undefined, 400],
          margin: 16,
          borderRadius: 16,
          fontSize: [16, 30, 30],
          fontWeight: ['bold', 500, 500],
          color: 'black',
          backgroundColor: 'lightgray',
        })}
      >
        @jsxcss/emotion
      </section>
      <div css={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div
          css={mediaQuery({
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            gap: [16, 8],
            margin: 16,
          })}
        >
          <Button>Press Button</Button>
          <Button>Press Button</Button>
          <Button>Press Button</Button>
        </div>
        <div css={{ backgroundColor: '#ffffff20', borderRadius: 16, margin: 16 }}>
          <div
            css={mediaQuery({ padding: 16, paddingBottom: 0, fontSize: [16, 20, 30], fontWeight: ['bold', 500, 500] })}
          >
            This is Title
          </div>
          <div css={{ display: 'flex', flexDirection: 'column', gap: 12, margin: 16 }}>
            <Button>Press Button</Button>
            <Button>Press Button</Button>
            <Button>Press Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaQueryPage
