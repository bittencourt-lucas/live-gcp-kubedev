import Link from 'next/link';
import Head from 'next/head';

function Header(props) {
  return(
    <header>
      <Head>
        <title>Previsão do Tempo - {props.title}</title>
      </Head>
      <h1>{props.title}</h1>

      <Link href="/">
        <a>Previsão do Tempo</a>
      </Link>
      <Link href="/sobre">
        <a>Sobre Mim</a>
      </Link>
    </header>
  );
}

export default Header;