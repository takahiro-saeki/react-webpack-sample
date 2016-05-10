import React from 'react';
import styles from '../../style/style.js';

export default class Footer extends React.Component {
  render() {
    const Year = new Date().getFullYear();
    return (
      <footer style={styles.footer}>Copyright <time>{Year}</time> react-webpack-sample</footer>
    )
  }
}
