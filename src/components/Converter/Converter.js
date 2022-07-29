import ConverterInput from 'components/ConverterInput';

import Container from 'components/Container';

import { useState, useEffect } from 'react';

import { fetchCurrency } from 'services/currency-api';

import NotFound from 'components/NotFound';

import MainLoader from 'components/MainLoader';

export default function Converter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('UAH');
  const [rates, setRates] = useState({});
  const [error, setError] = useState(false);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const fetchingCurrency = async () => {
      try {
        setSpiner(true);
        const data = await fetchCurrency();

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
    fetchingCurrency();
  }, []);

  useEffect(() => {
    const check = () => handleCountOneChange(1);
    rates && check();
    // eslint-disable-next-line
  }, [rates]);

  const fixNumber = number => {
    return number.toFixed(2);
  };

  const handleCountOneChange = count1 => {
    setCountTwo(fixNumber((count1 * rates[currencyTwo]) / rates[currencyOne]));
    setCountOne(count1);
  };

  const handleCurrencyOneChange = currency1 => {
    setCountTwo(fixNumber((countOne * rates[currencyTwo]) / rates[currency1]));
    setCurrencyOne(currency1);
  };

  const handleCountTwoChange = count2 => {
    setCountOne(fixNumber((count2 * rates[currencyOne]) / rates[currencyTwo]));
    setCountTwo(count2);
  };

  const handleCurrencyTwoChange = currency2 => {
    setCountOne(
      fixNumber((countTwo * rates[currencyOne]) / rates[currencyTwo])
    );
    setCurrencyTwo(currency2);
  };

  return (
    <>
      <Container>
        {Object.keys(rates).length > 0 && (
          <div className="section-wrapper">
            <div className="input-wrapper">
              <ConverterInput
                currencyChangeHandler={handleCurrencyOneChange}
                countChangeHandler={handleCountOneChange}
                rates={Object.keys(rates)}
                count={+countOne}
                currency={currencyOne}
              />
              <ConverterInput
                currencyChangeHandler={handleCurrencyTwoChange}
                countChangeHandler={handleCountTwoChange}
                rates={Object.keys(rates)}
                count={+countTwo}
                currency={currencyTwo}
              />
            </div>
          </div>
        )}
        {spiner && <MainLoader />}
        {error && <NotFound />}
      </Container>
    </>
  );
}
