import { useEffect, useState } from "react";
import Button from "../../components/button/button"
import ItemInfo from "../../components/item/item";
import { landmarkRepository } from "../../services/repositories/landmarksRepository";
import './MainPage.css'


// Главная страница со всеми достопримечательностями
const MainPage = () => {
	const [landmarks, setLandmarks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  
	useEffect(() => {
	  const data = landmarkRepository.getLandmarks();
	  setLandmarks(data);
	  setIsLoading(false);
	}, []);
  
	return (
	  <div className="main-page">
		<header className="main-header">
		  <div className="header-content">
			<div className="header-title-wrapper">
			  <h1 className="header-title">🏔️ Курорты Белокурихи</h1>
			  <p className="header-subtitle">Откройте для себя лучшие места отдыха</p>
			</div>
		  </div>
		</header>
  
		<main className="main-content">
		  {isLoading ? (
			<div className="loading-container">
			  <div className="loading-spinner"></div>
			  <p>Загружаем достопримечательности...</p>
			</div>
		  ) : (
			<>
			  
  
			  <div className="items-grid">
				{landmarks.map((item) => (
				  <ItemInfo
					key={item.id}
					id={item.id}
					imageUrl={item.imageUrl}
					title={item.title}
					description={item.description}
					price={item.price}
					onSale={item.onSale}
					rating={item.rating}
					className={item.onSale ? 'sale-item' : ''}
				  />
				))}
			  </div>
			</>
		  )}
		</main>
	  </div>
	);
  }

export default MainPage;