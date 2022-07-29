import { Puff } from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return (
    <div className="header-loader">
      <Puff
        height="40"
        width="40"
        radisu={1}
        color="#FFFFFF"
        ariaLabel="puff-loading"
        visible={true}
      />
    </div>
  );
}
