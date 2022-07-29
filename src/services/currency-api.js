const BAZE_URL = 'https://api.apilayer.com';

const API_KEY = 'EjSq0HOafXUWfGgQXFRoXkBxCns4FP8V';

const myHeaders = new Headers();
myHeaders.append('apikey', API_KEY);

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

async function mainFetchApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchCurrency() {
  return mainFetchApi(`${BAZE_URL}/exchangerates_data/latest`, requestOptions);
}

export function fetchCurrencyHeader() {
  return mainFetchApi(
    `${BAZE_URL}/exchangerates_data/latest?symbol=USD,EUR,UAH`,
    requestOptions
  );
}
