import React from 'react'
import Translate from '@docusaurus/Translate'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: JSX.Element
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Polymorphic as prop</Translate>,
    description: (
      <Translate>
        TypeSafe as prop to use semantic tag, or Easy integration with framer-motion, react-spring, etc.
      </Translate>
    ),
  },
  {
    title: <Translate>Responsive css prop</Translate>,
    description: (
      <Translate>Support responsive uis easily by using responsive css prop or useMediaQuery in SSR, CSR</Translate>
    ),
  },
  {
    title: <Translate>Declarative layout components</Translate>,
    description: (
      <Translate>Box, Flex, Stack is ready to build complex layout of user-interface declaratively.</Translate>
    ),
  },
]

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
