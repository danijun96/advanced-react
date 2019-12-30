import Link from 'next/link';

class Home extends React.Component {
  render () {
    return (
      <div>
        <p>Hey</p>
        <Link href="/sell">
          <a>sell</a>
        </Link>
      </div>
    )
  }
}

export default Home;
