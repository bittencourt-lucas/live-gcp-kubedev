import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Sobre() {
  return (
    <>
      <div className="main-content">
        <Header title="Sobre Mim" />
        <Image
          src='/assets/lbittencourt.png'
          alt='Uma foto do autor da página'
          width={300}
          height={400}
        />
      </div>
      <Footer name="Lucas Bittencourt" />
    </>
  );
}

export default Sobre;