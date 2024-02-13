import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Joe's Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious Meals" />
      </div>
    </>
  )
}

export default Header
