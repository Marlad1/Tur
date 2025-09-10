import './item.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import { routeRepository } from '../../services/repositories/routeRepository';

function ItemInfo({
  key,
	id,
  imageUrl, 
  title, 
  description, 
  price,
  className = '',
	isAdded=false,
	onRemove
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
		if (onRemove) onRemove(null);
	};

	return (
    <div className={`item-info ${className}`}>
      <div className="item-image">
      <Link to={`/place/${id}`}>
        <img 
          src={imageUrl} 
          alt={title || "Изображение"} 
        />
      </Link>
    </div>
      
      {title && <h3 className="item-title">{title}</h3>}
      
      {description && <p className="item-description">{description}</p>}
      
      <div className="item-footer">
        {price && <span className="item-price">{price} ₽</span>}
        {!isAdded ? (
          <Button text="Добавить в маршрут" onClick={addToRoutes} />
        ) : (
          <Button text="Удалить" onClick={() => onRemove(id)} />
        )}
      </div>
    </div>
  );
}

export default ItemInfo;