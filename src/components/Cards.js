import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/src/components/images/img-6.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/src/components/images/img-7.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/src/components/images/img-7.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/src/components/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/src/components/images/img-4.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bbva.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fturismo_sostenible.jpg&tbnid=3jvgyJGh6E9GHM&vet=12ahUKEwiJ28fOpfaCAxWSVzABHeMuALAQMygBegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.bbva.com%2Fes%2Fsostenibilidad%2Fque-es-el-turismo-sostenible%2F&docid=HOh_naMMHn7fBM&w=1920&h=1180&q=turismo&ved=2ahUKEwiJ28fOpfaCAxWSVzABHeMuALAQMygBegQIARBw'
              text='Travel Image'
              path='/travel'
              label='travel'
/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;