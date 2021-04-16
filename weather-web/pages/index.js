import Header from '../components/Header';
import Footer from '../components/Footer';

import api from '../services/api';

function Home() {
  const handleSubmitLocation = async event => {
    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');

    event.preventDefault();

    messageOne.textContent = 'Carregando...'
    messageTwo.textContent = ''

    const { data } = await api.get(`/weather?address=${encodeURIComponent(event.target.location.value)}`);

    if (data.error) messageOne.textContent = data.error
    else {
      messageOne.textContent = data.location
      messageTwo.textContent =
        data.summary +
        ' A temperatura é ' +
        data.temperature +
        'ºC, e há uma probabilidade de chuva de ' +
        data.precipProbability +
        '%.'
    }
  }

  return (
    <>
      <div className="main-content">
        <Header title="Home" />
        <p>Consulte a sua previsão do tempo</p>
        <form onSubmit={handleSubmitLocation}>
          <input id="location" name="location" placeholder="Localização" />
          <button type="submit">Buscar</button>
        </form>
        <p id="message-1">

        </p>
        <p id="message-2">

        </p>
      </div>
      <Footer name="Lucas Bittencourt" />
    </>
  );
}

export default Home;