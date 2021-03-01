import React, { Component } from 'react';
import lang from '../../lang';
// import css from './Main.module.css';

class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <section>
          <h2>{lang.eng.position}</h2>
          <div>{lang.eng.target}</div>
        </section>
      </>
    );
  }
}

export default Main;
