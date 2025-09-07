import './item.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function ItemInfo({ 
  imageUrl, 
  title, 
  description, 
  price,
  className = '',
  isFavorite=false
}) {
  return (
    <div className={`item-info ${className}`}>
      <div className='image'>
        <img 
          src={imageUrl} 
          alt={title || "Изображение"} 
        />    
        <div className='icon-overlay'>
            <FaRegHeart className='icon-outline'/>
            {isFavorite ? <FaHeart color='red' /> : <FaHeart color='white'/>}
        </div>
        
      </div>
      
      {title && <h3 className="item-title">{title}</h3>}
      
      {description && <p className="item-description">{description}</p>}
      
      <div className="item-footer">
        {price && <span className="item-price">{price} ₽</span>}
      </div>
    </div>
  );
}

export default ItemInfo;