import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './Config'
import Shimmer from './Shimmer'
const Menu = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    getMenu()
  }, [])

  async function getMenu() {
    try {
      const menu = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' +
          id
      )
      const response = await menu.json()
      // console.log(response.data.cards[0].card.card.info)
      // console.log(response.data)
      setMenu(response?.data?.cards[0]?.card?.card?.info)
      console.log(menu)
    } catch (error) {
      console.log(error)
    }
  }

  return !menu ? (
    <Shimmer />
  ) : (
    <div className='parent'>
      <div className='Singlecard'>
        <img src={IMG_CDN_URL + menu.cloudinaryImageId} alt='Food image' />

        <h2>{menu.name}</h2>

        <p className='area'>Area:{menu.areaName}</p>
        <div className='singleprod'>
          <p>⭐{menu.avgRating}</p>
          <p>💰{menu.costForTwoMessage}</p>
        </div>
      </div>
      <div className='moretocome'>
        <h3>Menu List coming soon✍️...</h3>
      </div>
    </div>
  )
}

export default Menu
