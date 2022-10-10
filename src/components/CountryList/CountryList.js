import React from 'react';
import CountryItem from '../CountryItem/CountryItem';
import style from './style.module.css';

function CountryList(props) {
  const { countries } = props;
  return (
    <div className={style.container}>
      {countries.map((el) => <CountryItem country={el} key={el.name} />)}
    </div>
  );
}

export default CountryList;
