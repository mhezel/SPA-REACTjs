import styles from "./CountryItem.module.css";
import React from 'react';
import { Emoji } from 'react-emoji-render';

function CountryItem({ country }) {

  console.log(country);
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{country.emoji}</span>
      {/* <Emoji text={country.emoji} /> */}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
