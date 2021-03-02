import React, { Component } from 'react';
import lang from '../../lang';
// import css from './Main.module.css';

class Main extends Component {
  render() {
    return (
      <>
        <section>
          <h2>{lang.eng.position}</h2>
          <div>
            <p>{lang.eng.target}</p>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
