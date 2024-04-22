import React, { useState } from 'react';
import './RecipeSlider.css';
import RightArrow from '../../assets/images/right-arrow.png';
import LeftArrow from '../../assets/images/backward.png';
import PizzaImage from '../../assets/images/pizza.jpg';
import SpaghettiImage from '../../assets/images/spaghetti.jpg';
import LasagneImage from '../../assets/images/lasagne.jpg';

const RecipeSlider = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === 2 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? 2 : slide - 1);
    }
    return (
        <div className='recipe-slider' id='recipe-slider'>
            <img src={LeftArrow} className='left-arrow-img' alt='left-arrow' onClick={prevSlide} />
            <img src={RightArrow} className='right-arrow-img' alt='right-arrow' onClick={nextSlide} />
            <div className='slider'>
                <div className={`slide ${slide === 0 ? 'active' : '' }`}>
                    <div className='slide-left-section'>
                        <img src={SpaghettiImage} alt='spaghetti-img'/>
                    </div>

                    <div className='slide-right-section'>
                        <h3>Ingredients</h3>
                        <ul>    
                            <li>Spaghetti</li>
                            <li>Tomato Sauce</li>
                            <li>Onion</li>
                            <li>Garlic</li>
                            <li>Ground Beef</li>
                            <li>Pepper</li>
                            <li>Salt</li>
                            <li>Oil</li>
                        </ul>
                    </div>
                </div>

                <div className={`slide ${slide === 1 ? 'active' : '' }`}>
                    <div className='slide-left-section'>
                        <img src={PizzaImage} alt='pizza-img'/>
                    </div>

                    <div className='slide-right-section'>
                        <h3>Ingredients</h3>
                        <ul>    
                            <li>Flour</li>
                            <li>Yeast</li>
                            <li>Sugar</li>
                            <li>Salt</li>
                            <li>Water</li>
                            <li>Tomato Sauce</li>
                            <li>Cheese</li>
                            <li>Pepperoni</li>
                        </ul>
                    </div>
                </div>

                <div className={`slide ${slide === 2 ? 'active' : '' }`}>
                    <div className='slide-left-section'>
                        <img src={LasagneImage} alt='lasagne-img'/>
                    </div>

                    <div className='slide-right-section'>
                        <h3>Ingredients</h3>
                        <ul>    
                            <li>Lasagne Sheets</li>
                            <li>Tomato Sauce</li>
                            <li>Ground Beef</li>
                            <li>Onion</li>
                            <li>Garlic</li>
                            <li>Pepper</li>
                            <li>Salt</li>
                            <li>Cheese</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeSlider;
