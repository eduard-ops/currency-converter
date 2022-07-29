// MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary  css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root
import Select from '@mui/material/Select';

import InputBase from '@mui/material/InputBase';

import { styled } from '@mui/material/styles';

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: 'cadetblue',
      boxShadow: '0 0 0 0.6px rgb(95, 158, 160)',
    },
  },
}));

const CustomSelect = styled(Select)({
  '& .MuiSelect-select': {
    padding: '11px 20px',
    width: '30px',
  },
  '&.MuiOutlinedInput-root': {
    marginLeft: '40px',
    outline: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'cadetblue',
  },
});

export { Input, CustomSelect };

// border-color: rgba(0, 0, 0, 0.23)

// .MuiSelect-outlined
