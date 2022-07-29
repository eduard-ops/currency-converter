import { Circles } from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <Circles
        height="80"
        width="80"
        color="cadetblue"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}
