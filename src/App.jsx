import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Dishes from './Components/Dishes/Dishes'
import Title from './Components/Title/Title'
import RecipeSlider from './Components/RecipeSlider/RecipeSlider'
import Contact from './Components/Contact/Contact'
import ShoppingList from './Components/ShoppingList/ShoppingList'
import ServicesRestaurant from './Components/ServicesRestaurant/ServicesRestaurant'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title='Our Dishes' subtitle='Popular Dishes' />
        <Dishes />

        <Title title='Our recipes' subtitle='Recipes' />
        <RecipeSlider />

        <Title title='Create shopping list' subtitle='Shopping List' />
        <ShoppingList />

        <Title title='Our services' subtitle='Services' />
        <ServicesRestaurant />

        <Title title='Get in touch' subtitle='Contact Us' />
        <Contact />
      </div>
    </div>
  )
}

export default App
