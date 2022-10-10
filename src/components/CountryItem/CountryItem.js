import React from 'react';
import style from './style.module.css';
import spareFlag from '../../assets/images/spareFalg.svg';

function CountryItem(props) {
  const { country } = props;
  return (
    <div className={style.container}>
      <h1>{country.name}</h1>
      <div>
        <img
          src={country.flag}
          alt="flag"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = spareFlag;
          }}
        />
      </div>
      <h2>
        Capital :
        {country.capital}
      </h2>
      <h2>
        Timezone :
        <br />
        {' '}
        {country.timezone}
      </h2>
    </div>
  );
}
export default CountryItem;
