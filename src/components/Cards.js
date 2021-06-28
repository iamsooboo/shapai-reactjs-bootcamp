import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Bootcamps!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Python & Network Security - Free 7 Days Long Bootcamp'
              label='Harsh Akshit'
              path='https://forms.gle/poSiF6FTnPk9Uzq49'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Python and Data Visualization - Free 7 Days Long Bootcamp'
              label='Shaurya Sinha'
              path='https://forms.gle/2NqdeuFq9MujErfv5'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Javascript and Backend with NodeJS  7 Days Bootcamp'
              label='Shaurya Sinha'
              path='https://forms.gle/Tao5iML69yanvpeT7'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Tableau Fundamentals - Free 7 Days Long Bootcamp'
              label='Dipayan Ghoshal'
              path='https://forms.gle/XGyyUuE2jKUCo4ph6'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Python and Natural Language Processing - Free 7 Days Long Bootcamp'
              label='Madhav'
              path='https://forms.gle/ZMRotZ2NyRFgmvCe7'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
