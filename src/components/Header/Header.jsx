import Logo from 'components/Logo';

import Container from 'components/Container';

import { useState, useEffect } from 'react';

import { fetchCurrencyHeader } from 'services/currency-api';

import UsdIcon from 'components/UsdIcon';

import EurIcon from 'components/EurIcon';

import HeaderLoader from 'components/HeaderLoader';

export default function Header() {
  const [rates, setRates] = useState({});
  const [spiner, setSpiner] = useState(false);
  const [error, setError] = useState(false);

  const fixNumber = number => {
    return number.toFixed(2);
  };

  useEffect(() => {
    const fetchingCurrencyHeader = async () => {
      try {
        setSpiner(true);
        const data = await fetchCurrencyHeader();
        if (Object.keys(data).length === 0) {
          throw new Error();
        }
        setRates(data.rates);
      } catch (error) {
        setError(true);
      } finally {
        setSpiner(false);
      }
    };
    fetchingCurrencyHeader();
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="header-wrap">
          <div className="logo-container">
            <Logo />
            <span className="logo-container__text">Currency converter</span>
          </div>
          {Object.keys(rates).length > 0 && (
            <ul className="currency-list">
              <li className="currency-list__item">
                <UsdIcon />
                <span className="currency-list__item-text">
                  {fixNumber(rates['UAH'] / rates['USD'])}
                </span>
              </li>
              <li className="currency-list__item">
                <EurIcon />
                <span className="currency-list__item-text">
                  {fixNumber(rates['UAH'] / rates['EUR'])}
                </span>
              </li>
            </ul>
          )}
          {spiner && <HeaderLoader />}
          {error && <p>Sorry, an error has occurred</p>}
        </div>
      </Container>
    </header>
  );
}
