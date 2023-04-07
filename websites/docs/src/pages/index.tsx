import React from 'react'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src="img/logo_notcropped.png" alt="logo" style={{ height: 180, width: 180 }} />
        <h1 className="hero__title">JSXCSS</h1>
        <p className="hero__subtitle">
          <Translate>CSS components in JSX easily</Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro/motivation.i18n">
            <Translate>Get started</Translate>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
