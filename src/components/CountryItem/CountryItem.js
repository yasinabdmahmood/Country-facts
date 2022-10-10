import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import spareFlag from '../../assets/images/spareFalg.svg';

function CountryItem(props) {
  const { country, st } = props;
  const styleObj = {
    backgroundColor: st,
  };
  return (
    <div className={style.container} style={styleObj}>
      <h1>{country.name}</h1>
      <div>
        <img
          src={country.flag}
          alt="flag"
          onError={({ currentTarget }) => {
            const image = currentTarget;
            image.onerror = null;
            image.src = spareFlag;
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

CountryItem.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
  st: PropTypes.string.isRequired,
};

export default CountryItem;
