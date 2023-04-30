import { IMG_CDN_URL } from './Config'
const ResturentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className='resturent-card'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt='Food image' />

      <h2>{name.length < 20 ? name : name.substring(0, 20) + '...'}</h2>
      <p className='catagory'>{cuisines.slice(0, 3).join(', ')}</p>
      <p className='area'>Area:{area}</p>
      <div className='card-footer'>
        <p>⭐{avgRating}</p>
        <p>🛣️{lastMileTravelString}</p>
        <p>💰{costForTwoString}</p>
      </div>
    </div>
  )
}
export default ResturentCard
