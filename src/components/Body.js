import { restaurantList } from './Data'

import { useEffect, useState } from 'react'
import ResturentCard from './ResturentCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

function filterData(search, searchedData) {
  const filtered = searchedData.filter((item) =>
    item?.data?.name.toLowerCase().includes(search.toLowerCase())
  )

  return filtered
}

export const Body = () => {
  const [search, setSearch] = useState('')
  const [resturent, setResturent] = useState([])
  const [filtered, setFiltered] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    CheckError(search, resturent)
  }, [search])

  useEffect(() => {
    getResturents()
  }, [])

  async function getResturents() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING'
    )
    const response = await data.json()
    setResturent(response?.data?.cards[2]?.data?.data?.cards)
    setFiltered(response?.data?.cards[2]?.data?.data?.cards)
  }
  function CheckError(search, restaurants) {
    if (search.length > 0) {
      const results = filterData(search, restaurants)
      if (results.length === 0) {
        setErrorMessage('No matches restaurant found')
        setFiltered([])
      } else {
        setFiltered(results)
        setErrorMessage('')
      }
    } else {
      setErrorMessage('')
      setFiltered(restaurants)
    }
  }
  // const CheckError = (searchText, restaurants) => {
  //   if (searchText !== '') {
  //     const data = filterData(searchText, restaurants)
  //     setFiltered(data)
  //     setErrorMessage('')
  //     if (data.length === 0) {
  //       setErrorMessage('No matches restaurant found')
  //     }
  //   } else {
  //     setErrorMessage('')
  //     setFiltered(restaurants)
  //   }
  // }
  //When i don't have all the restaurant then don't return it is also known as erarly return
  if (!resturent) return null

  return resturent.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Food name'
          className='search-input'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          type='button'
          className='search-button'
          // onClick={() => {
          //   //   setResturent(filterData(search, resturent))
          //   // It was trying to find other food name in single/updated resturent
          //   // list, but the updated resturent is having only one item so it was not able to search it after 1st search
          //   CheckError(search, resturent)
          // }}
        >
          {search}
          Search
        </button>
      </div>
      {errorMessage && <div className='error-container'>{errorMessage}</div>}
      <div className='rlist'>
        {filtered.map((list) => {
          return (
            <Link
              to={'/resturant/' + list.data.sla.restaurantId}
              key={list.data.sla.restaurantId}
            >
              <ResturentCard key={list.data.id} {...list.data} />
            </Link>
          )
        })}
      </div>
    </>
  )
}
