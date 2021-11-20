import Link from 'next/link'
import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link
        href={{
          pathname: '/'
        }}
      >
        <a className={styles.Link}>Index</a>
      </Link>
      <Link
        href={{
          pathname: '/about'
        }}
      >
        <a style={{ color: 'green' }}> About</a>
      </Link>
    </nav>
  )
}

export default Navigation
