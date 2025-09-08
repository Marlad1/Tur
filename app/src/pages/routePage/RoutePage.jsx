import { useEffect, useState } from "react";
import { routeRepository } from "../../services/repositories/routeRepository";
import ItemInfo from "../../components/item/item";

// Страница с проложенным путём
const RoutePage = () => {
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		const data = routeRepository.getRoutes();
		setRoutes(data);
	}, []);

	return (
		<div className="App">
      <header className="App-header">
        <div className='App-line'>
          <p>Маршрут</p>
        </div>
      </header>
      <div className="items-container">
     		{routes.map((item) => {
					<ItemInfo
          key={item.id}
					id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          price={item.price}
          onSale={item.onSale}
          rating={item.rating}
          className={item.onSale ? 'sale-item' : ''} />
				})}
    	</div>
    </div>
	);
}

export default RoutePage;