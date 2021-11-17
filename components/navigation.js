import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link
        href={{
          pathname: '/'
        }}
      >
        <a>Index</a>
      </Link>
      <Link
        href={{
          pathname: '/about'
        }}
      >
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Navigation
