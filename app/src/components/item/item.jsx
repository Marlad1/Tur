import './item.css';

function ItemInfo({ 
  imageUrl, 
  title, 
  description, 
  price,
  className = '' 
}) {
  return (
    <div className={`item-info ${className}`}>
      <div className='image'>
        <img 
          src={imageUrl} 
          alt={title || "Изображение товара"} 
        />    
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