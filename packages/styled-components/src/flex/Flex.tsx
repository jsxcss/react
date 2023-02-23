import { CSSProperties, ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'
import styled, { css } from 'styled-components'

const Element = styled.div``

interface FlexOptions {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}

type FlexProps<C extends ElementType> = {
  as?: C
} & ComponentPropsWithoutRef<C> &
  FlexOptions

export const Flex: <C extends ElementType = 'div'>(
  flexProps: FlexProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  return (
    <Element
      as={as || 'div'}
      ref={ref}
      css={css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
      `}
      {...rest}
    />
  )
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sample: <C extends ElementType = 'div'>(
  flexProps: FlexProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
) => JSX.Element | null = forwardRef(function Flex<T extends ElementType>(
  { as, align = 'stretch', direction = 'row', justify = 'flex-start', ...rest }: FlexProps<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const fullCSS = css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `
  switch (as) {
    case 'a':
      return <a ref={ref} css={fullCSS} {...rest} />
    case 'abbr':
      return <abbr ref={ref} css={fullCSS} {...rest} />
    case 'address':
      return <address ref={ref} css={fullCSS} {...rest} />
    case 'animate':
      return <animate ref={ref} css={fullCSS} {...rest} />
    // case 'animateMotion':
    //   return <animateMotion ref={ref} css={fullCSS} {...rest} />
    // case 'animateTransform':
    //   return <animateTransform ref={ref} css={fullCSS} {...rest} />
    case 'area':
      return <area ref={ref} css={fullCSS} {...rest} />
    case 'article':
      return <article ref={ref} css={fullCSS} {...rest} />
    case 'aside':
      return <aside ref={ref} css={fullCSS} {...rest} />
    case 'audio':
      return <audio ref={ref} css={fullCSS} {...rest} />
    case 'b':
      return <b ref={ref} css={fullCSS} {...rest} />
    case 'base':
      return <base ref={ref} css={fullCSS} {...rest} />
    case 'bdi':
      return <bdi ref={ref} css={fullCSS} {...rest} />
    case 'bdo':
      return <bdo ref={ref} css={fullCSS} {...rest} />
    case 'big':
      return <big ref={ref} css={fullCSS} {...rest} />
    case 'blockquote':
      return <blockquote ref={ref} css={fullCSS} {...rest} />
    case 'body':
      return <body ref={ref} css={fullCSS} {...rest} />
    case 'br':
      return <br ref={ref} css={fullCSS} {...rest} />
    case 'button':
      return <button ref={ref} css={fullCSS} {...rest} />
    case 'canvas':
      return <canvas ref={ref} css={fullCSS} {...rest} />
    case 'caption':
      return <caption ref={ref} css={fullCSS} {...rest} />
    case 'center':
      return <center ref={ref} css={fullCSS} {...rest} />
    case 'circle':
      return <circle ref={ref} css={fullCSS} {...rest} />
    case 'cite':
      return <cite ref={ref} css={fullCSS} {...rest} />
    // case 'clipPath':
    //   return <clipPath ref={ref} css={fullCSS} {...rest} />
    case 'code':
      return <code ref={ref} css={fullCSS} {...rest} />
    case 'col':
      return <col ref={ref} css={fullCSS} {...rest} />
    case 'colgroup':
      return <colgroup ref={ref} css={fullCSS} {...rest} />
    case 'data':
      return <data ref={ref} css={fullCSS} {...rest} />
    case 'datalist':
      return <datalist ref={ref} css={fullCSS} {...rest} />
    case 'dd':
      return <dd ref={ref} css={fullCSS} {...rest} />
    case 'defs':
      return <defs ref={ref} css={fullCSS} {...rest} />
    case 'del':
      return <del ref={ref} css={fullCSS} {...rest} />
    case 'desc':
      return <desc ref={ref} css={fullCSS} {...rest} />
    case 'details':
      return <details ref={ref} css={fullCSS} {...rest} />
    case 'dfn':
      return <dfn ref={ref} css={fullCSS} {...rest} />
    case 'dialog':
      return <dialog ref={ref} css={fullCSS} {...rest} />
    case 'div':
      return <div ref={ref} css={fullCSS} {...rest} />
    case 'dl':
      return <dl ref={ref} css={fullCSS} {...rest} />
    case 'dt':
      return <dt ref={ref} css={fullCSS} {...rest} />
    case 'ellipse':
      return <ellipse ref={ref} css={fullCSS} {...rest} />
    case 'em':
      return <em ref={ref} css={fullCSS} {...rest} />
    case 'embed':
      return <embed ref={ref} css={fullCSS} {...rest} />
    // case 'feBlend':
    //   return <feBlend ref={ref} css={fullCSS} {...rest} />
    // case 'feColorMatrix':
    //   return <feColorMatrix ref={ref} css={fullCSS} {...rest} />
    // case 'feComponentTransfer':
    //   return <feComponentTransfer ref={ref} css={fullCSS} {...rest} />
    // case 'feComposite':
    //   return <feComposite ref={ref} css={fullCSS} {...rest} />
    // case 'feConvolveMatrix':
    //   return <feConvolveMatrix ref={ref} css={fullCSS} {...rest} />
    // case 'feDiffuseLighting':
    //   return <feDiffuseLighting ref={ref} css={fullCSS} {...rest} />
    // case 'feDisplacementMap':
    //   return <feDisplacementMap ref={ref} css={fullCSS} {...rest} />
    // case 'feDistantLight':
    //   return <feDistantLight ref={ref} css={fullCSS} {...rest} />
    // case 'feDropShadow':
    //   return <feDropShadow ref={ref} css={fullCSS} {...rest} />
    // case 'feFlood':
    //   return <feFlood ref={ref} css={fullCSS} {...rest} />
    // case 'feFuncA':
    //   return <feFuncA ref={ref} css={fullCSS} {...rest} />
    // case 'feFuncB':
    //   return <feFuncB ref={ref} css={fullCSS} {...rest} />
    // case 'feFuncG':
    //   return <feFuncG ref={ref} css={fullCSS} {...rest} />
    // case 'feFuncR':
    //   return <feFuncR ref={ref} css={fullCSS} {...rest} />
    // case 'feGaussianBlur':
    //   return <feGaussianBlur ref={ref} css={fullCSS} {...rest} />
    // case 'feImage':
    //   return <feImage ref={ref} css={fullCSS} {...rest} />
    // case 'feMerge':
    //   return <feMerge ref={ref} css={fullCSS} {...rest} />
    // case 'feMergeNode':
    //   return <feMergeNode ref={ref} css={fullCSS} {...rest} />
    // case 'feMorphology':
    //   return <feMorphology ref={ref} css={fullCSS} {...rest} />
    // case 'feOffset':
    //   return <feOffset ref={ref} css={fullCSS} {...rest} />
    // case 'fePointLight':
    //   return <fePointLight ref={ref} css={fullCSS} {...rest} />
    // case 'feSpecularLighting':
    //   return <feSpecularLighting ref={ref} css={fullCSS} {...rest} />
    // case 'feSpotLight':
    //   return <feSpotLight ref={ref} css={fullCSS} {...rest} />
    // case 'feTile':
    //   return <feTile ref={ref} css={fullCSS} {...rest} />
    // case 'feTurbulence':
    //   return <feTurbulence ref={ref} css={fullCSS} {...rest} />
    case 'fieldset':
      return <fieldset ref={ref} css={fullCSS} {...rest} />
    case 'figcaption':
      return <figcaption ref={ref} css={fullCSS} {...rest} />
    case 'figure':
      return <figure ref={ref} css={fullCSS} {...rest} />
    case 'filter':
      return <filter ref={ref} css={fullCSS} {...rest} />
    case 'footer':
      return <footer ref={ref} css={fullCSS} {...rest} />
    // case 'foreignObject':
    //   return <foreignObject ref={ref} css={fullCSS} {...rest} />
    case 'form':
      return <form ref={ref} css={fullCSS} {...rest} />
    case 'g':
      return <g ref={ref} css={fullCSS} {...rest} />
    case 'h1':
      return <h1 ref={ref} css={fullCSS} {...rest} />
    case 'h2':
      return <h2 ref={ref} css={fullCSS} {...rest} />
    case 'h3':
      return <h3 ref={ref} css={fullCSS} {...rest} />
    case 'h4':
      return <h4 ref={ref} css={fullCSS} {...rest} />
    case 'h5':
      return <h5 ref={ref} css={fullCSS} {...rest} />
    case 'h6':
      return <h6 ref={ref} css={fullCSS} {...rest} />
    case 'head':
      return <head ref={ref} css={fullCSS} {...rest} />
    case 'header':
      return <header ref={ref} css={fullCSS} {...rest} />
    case 'hgroup':
      return <hgroup ref={ref} css={fullCSS} {...rest} />
    case 'hr':
      return <hr ref={ref} css={fullCSS} {...rest} />
    case 'html':
      return <html ref={ref} css={fullCSS} {...rest} />
    case 'i':
      return <i ref={ref} css={fullCSS} {...rest} />
    case 'iframe':
      return <iframe ref={ref} css={fullCSS} {...rest} />
    case 'image':
      return <image ref={ref} css={fullCSS} {...rest} />
    case 'img':
      return <img ref={ref} css={fullCSS} {...rest} />
    case 'input':
      return <input ref={ref} css={fullCSS} {...rest} />
    case 'ins':
      return <ins ref={ref} css={fullCSS} {...rest} />
    case 'kbd':
      return <kbd ref={ref} css={fullCSS} {...rest} />
    case 'keygen':
      return <keygen ref={ref} css={fullCSS} {...rest} />
    case 'label':
      return <label ref={ref} css={fullCSS} {...rest} />
    case 'legend':
      return <legend ref={ref} css={fullCSS} {...rest} />
    case 'li':
      return <li ref={ref} css={fullCSS} {...rest} />
    case 'line':
      return <line ref={ref} css={fullCSS} {...rest} />
    // case 'linearGradient':
    //   return <linearGradient ref={ref} css={fullCSS} {...rest} />
    case 'link':
      return <link ref={ref} css={fullCSS} {...rest} />
    case 'main':
      return <main ref={ref} css={fullCSS} {...rest} />
    case 'map':
      return <map ref={ref} css={fullCSS} {...rest} />
    case 'mark':
      return <mark ref={ref} css={fullCSS} {...rest} />
    case 'marker':
      return <marker ref={ref} css={fullCSS} {...rest} />
    case 'mask':
      return <mask ref={ref} css={fullCSS} {...rest} />
    case 'menu':
      return <menu ref={ref} css={fullCSS} {...rest} />
    case 'menuitem':
      return <menuitem ref={ref} css={fullCSS} {...rest} />
    case 'meta':
      return <meta ref={ref} css={fullCSS} {...rest} />
    case 'metadata':
      return <metadata ref={ref} css={fullCSS} {...rest} />
    case 'meter':
      return <meter ref={ref} css={fullCSS} {...rest} />
    case 'mpath':
      return <mpath ref={ref} css={fullCSS} {...rest} />
    case 'nav':
      return <nav ref={ref} css={fullCSS} {...rest} />
    case 'noindex':
      return <noindex ref={ref} css={fullCSS} {...rest} />
    case 'noscript':
      return <noscript ref={ref} css={fullCSS} {...rest} />
    case 'object':
      return <object ref={ref} css={fullCSS} {...rest} />
    case 'ol':
      return <ol ref={ref} css={fullCSS} {...rest} />
    case 'optgroup':
      return <optgroup ref={ref} css={fullCSS} {...rest} />
    case 'option':
      return <option ref={ref} css={fullCSS} {...rest} />
    case 'output':
      return <output ref={ref} css={fullCSS} {...rest} />
    case 'p':
      return <p ref={ref} css={fullCSS} {...rest} />
    case 'param':
      return <param ref={ref} css={fullCSS} {...rest} />
    case 'path':
      return <path ref={ref} css={fullCSS} {...rest} />
    case 'pattern':
      return <pattern ref={ref} css={fullCSS} {...rest} />
    case 'picture':
      return <picture ref={ref} css={fullCSS} {...rest} />
    case 'polygon':
      return <polygon ref={ref} css={fullCSS} {...rest} />
    case 'polyline':
      return <polyline ref={ref} css={fullCSS} {...rest} />
    case 'pre':
      return <pre ref={ref} css={fullCSS} {...rest} />
    case 'progress':
      return <progress ref={ref} css={fullCSS} {...rest} />
    case 'q':
      return <q ref={ref} css={fullCSS} {...rest} />
    // case 'radialGradient':
    //   return <radialGradient ref={ref} css={fullCSS} {...rest} />
    case 'rect':
      return <rect ref={ref} css={fullCSS} {...rest} />
    case 'rp':
      return <rp ref={ref} css={fullCSS} {...rest} />
    case 'rt':
      return <rt ref={ref} css={fullCSS} {...rest} />
    case 'ruby':
      return <ruby ref={ref} css={fullCSS} {...rest} />
    case 's':
      return <s ref={ref} css={fullCSS} {...rest} />
    case 'samp':
      return <samp ref={ref} css={fullCSS} {...rest} />
    case 'script':
      return <script ref={ref} css={fullCSS} {...rest} />
    case 'section':
      return <section ref={ref} css={fullCSS} {...rest} />
    case 'select':
      return <select ref={ref} css={fullCSS} {...rest} />
    case 'slot':
      return <slot ref={ref} css={fullCSS} {...rest} />
    case 'small':
      return <small ref={ref} css={fullCSS} {...rest} />
    case 'source':
      return <source ref={ref} css={fullCSS} {...rest} />
    case 'span':
      return <span ref={ref} css={fullCSS} {...rest} />
    case 'stop':
      return <stop ref={ref} css={fullCSS} {...rest} />
    case 'strong':
      return <strong ref={ref} css={fullCSS} {...rest} />
    case 'style':
      return <style ref={ref} css={fullCSS} {...rest} />
    case 'sub':
      return <sub ref={ref} css={fullCSS} {...rest} />
    case 'summary':
      return <summary ref={ref} css={fullCSS} {...rest} />
    case 'sup':
      return <sup ref={ref} css={fullCSS} {...rest} />
    case 'svg':
      return <svg ref={ref} css={fullCSS} {...rest} />
    case 'switch':
      return <switch ref={ref} css={fullCSS} {...rest} />
    case 'symbol':
      return <symbol ref={ref} css={fullCSS} {...rest} />
    case 'table':
      return <table ref={ref} css={fullCSS} {...rest} />
    case 'tbody':
      return <tbody ref={ref} css={fullCSS} {...rest} />
    case 'td':
      return <td ref={ref} css={fullCSS} {...rest} />
    case 'template':
      return <template ref={ref} css={fullCSS} {...rest} />
    case 'text':
      return <text ref={ref} css={fullCSS} {...rest} />
    // case 'textPath':
    //   return <textPath ref={ref} css={fullCSS} {...rest} />
    case 'textarea':
      return <textarea ref={ref} css={fullCSS} {...rest} />
    case 'tfoot':
      return <tfoot ref={ref} css={fullCSS} {...rest} />
    case 'th':
      return <th ref={ref} css={fullCSS} {...rest} />
    case 'thead':
      return <thead ref={ref} css={fullCSS} {...rest} />
    case 'time':
      return <time ref={ref} css={fullCSS} {...rest} />
    case 'title':
      return <title ref={ref} css={fullCSS} {...rest} />
    case 'tr':
      return <tr ref={ref} css={fullCSS} {...rest} />
    case 'track':
      return <track ref={ref} css={fullCSS} {...rest} />
    case 'tspan':
      return <tspan ref={ref} css={fullCSS} {...rest} />
    case 'u':
      return <u ref={ref} css={fullCSS} {...rest} />
    case 'ul':
      return <ul ref={ref} css={fullCSS} {...rest} />
    case 'use':
      return <use ref={ref} css={fullCSS} {...rest} />
    case 'var':
      return <var ref={ref} css={fullCSS} {...rest} />
    case 'video':
      return <video ref={ref} css={fullCSS} {...rest} />
    case 'view':
      return <view ref={ref} css={fullCSS} {...rest} />
    case 'wbr':
      return <wbr ref={ref} css={fullCSS} {...rest} />
    case 'webview':
      return <webview ref={ref} css={fullCSS} {...rest} />

    default:
      return <div ref={ref} css={fullCSS} {...rest} />
  }
})
