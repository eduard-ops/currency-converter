const BAZE_URL = 'https://openexchangerates.org';

const API_KEY = '5a61d0d62eda44b2901cc031b6790b55';

async function mainFetchApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchCurrency() {
  return mainFetchApi(`${BAZE_URL}/api/latest.json?app_id=${API_KEY}`);
}

export function fetchCurrencyHeader() {
  return mainFetchApi(
    `${BAZE_URL}/api/latest.json?app_id=${API_KEY}&symbol=USD,EUR,UAH`
  );
}
