import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';

import { Input, CustomSelect } from 'Ui/styleUi';

export default function ConverterInput({
  rates,
  count,
  currency,
  countChangeHandler,
  currencyChangeHandler,
}) {
  return (
    <div className="input-container">
      <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
      <Input
        type="nummber"
        value={count ? count : ''}
        onChange={e => countChangeHandler(e.target.value)}
      />
      <CustomSelect
        sx={{
          '&:hover': {
            color: 'cadetblue',
            '&& fieldset': {
              border: '2px solid cadetblue',
            },
          },
        }}
        MenuProps={{ disableScrollLock: true }}
        value={currency}
        onChange={e => currencyChangeHandler(e.target.value)}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {rates.map(currency => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </CustomSelect>
    </div>
  );
}

ConverterInput.propTypes = {
  count: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  rates: PropTypes.array,
  countChangeHandler: PropTypes.func,
  currencyChangeHandler: PropTypes.func,
};
