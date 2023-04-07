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
    title: <Translate>item 1 Title</Translate>,
    description: <Translate>item 1</Translate>,
  },
  {
    title: <Translate>item 2 Title</Translate>,
    description: <Translate>item 2</Translate>,
  },
  {
    title: <Translate>item 3 Title</Translate>,
    description: <Translate>item 3</Translate>,
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
