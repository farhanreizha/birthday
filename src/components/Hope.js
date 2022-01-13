import React, { Component } from 'react';
import { init } from 'ityped';

class Hope extends Component {
  componentDidMount() {
    const element = document.getElementById('hope');
    const by = document.getElementById('by');
    init(element, {
      showCursor: false,
      loop: false,
      strings: [
        'Di umur kamu yang bertambah saat ini yang kamu inginkan tercapai, apa yang kamu harapkan terwujud, dan semoga kamu bisa menjadi orang yang lebih baik lagi. Amin 🙏',
      ],
    });
    init(by, {
      showCursor: false,
      loop: false,
      strings: ['- Farhan Reizha Fauzan -'],
    });
  }
  render() {
    return (
      <div className='space-y-3'>
        <div className='text-base md:text-2xl container' id='hope'></div>
        <div className='text-sm md:text-xl container' id='by'></div>
      </div>
    );
  }
}

export default Hope;
