import React from 'react'
import './Dishes.css'
import Spaghetti from '../../assets/images/spaghetti.jpg'
import Pizza from '../../assets/images/pizza.jpg'
import Lasagne from '../../assets/images/lasagne.jpg'


const Dishes = () => {
  return (
    <div className='dishes'>

        <div className='dish'>
            <img src={Spaghetti} alt='Spaghetti' />
            <div className='dish-info'>
                <h3>Spaghetti</h3>
                <p>Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine.</p>
            </div>
        </div>

        <div className='dish'>
            <img src={Pizza} alt='Pizza' />
            <div className='dish-info'>
                <h3>Pizza</h3>
                <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.</p>
            </div>
        </div>

        <div className='dish'>
            <img src={Lasagne} alt='Lasagne' />
            <div className='dish-info'>
                <h3>Lasagne</h3>
                <p>Lasagne is a wide, flat pasta shape, and possibly one of the oldest types of pasta. The word also refers to a dish made with several layers of lasagne sheets alternated with sauces and various other ingredients.</p>
            </div>
        </div>
    </div>
  )
}

export default Dishes
