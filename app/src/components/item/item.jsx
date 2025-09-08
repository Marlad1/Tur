import './item.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Button from '../button/button';
import { routeRepository } from '../../services/repositories/routeRepository';

function ItemInfo({
	id, 
  imageUrl, 
  title, 
  description, 
  price,
  className = '',
  isFavorite=false
}) {
	const addToRoutes = () => {
		const item = {
			id: id,
			imageUrl: imageUrl,
			title: title,
			description: description,
			price: price,
		};
		routeRepository.addRoute(item);
	};

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
				<Button text="Добавить в маршрут" onClick={addToRoutes} />
      </div>
    </div>
  );
}

export default ItemInfo;