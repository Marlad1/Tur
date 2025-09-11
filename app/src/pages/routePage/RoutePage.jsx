import { useEffect, useState } from "react";
import { routeRepository } from "../../services/repositories/routeRepository";
import ItemInfo from "../../components/item/item";
import './RoutePage.css';
import { Link } from "react-router-dom";

// Страница с проложенным путём
const RoutePage = () => {
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = routeRepository.getRoutes();
    setRoutes(data);
    setIsLoading(false);
  }, []);

  const handleRemove = (id) => {
    if (id) {
      const updatedRoutes = routeRepository.removeRoute(id);
      setRoutes(updatedRoutes);
    } else {
      setRoutes(routeRepository.getRoutes());
    }
  };

  const calculateTotal = () => {
    return routes.reduce((total, item) => total + (item.price || 0), 0);
  };

  const clearAllRoutes = () => {
    routes.forEach(item => {
      routeRepository.removeRoute(item.id);
    });
    setRoutes([]);
  };

  return (
    <div className="route-page">
      <header className="route-header">
        <div className="route-header-content">
          <h1 className="route-title">🌿 Мой маршрут</h1>
          {routes.length > 0 && (
            <div className="route-stats">
              <span className="stat-item">
                📍 {routes.length} {routes.length === 1 ? 'место' : 
                  routes.length > 1 && routes.length < 5 ? 'места' : 'мест'}
              </span>
              <span className="stat-item">💰 {calculateTotal()}₽</span>
              <button className="clear-button" onClick={clearAllRoutes}>
                🗑️ Очистить все
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="route-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Загружаем ваш маршрут...</p>
          </div>
        ) : routes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🗺️</div>
            <h2>Маршрут пуст</h2>
            <p>Начните добавлять достопримечательности, чтобы создать свой идеальный маршрут!</p>
            <Link to="/">
              <button className="cta-button">Исследовать места</button>
            </Link>
            
          </div>
        ) : (
          <div className="route-content-wrapper">
            <div className="items-grid">
              {routes.map((item) => (
                <ItemInfo
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  onSale={item.onSale}
                  rating={item.rating}
                  isAdded={true}
                  onRemove={handleRemove}
                  className={item.onSale ? 'sale-item' : ''}
                />
              ))}
            </div>
            
            <div className="route-summary">
              <div className="summary-card">
                <h3>📊 Итоги маршрута</h3>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Количество мест:</span>
                    <span className="count">{routes.length}</span>
                  </div>
                  <div className="summary-row">
                    <span>Общая стоимость:</span>
                    <span className="total-price">{calculateTotal()}₽</span>
                  </div>
                  <div className="summary-row">
                    <span>Примерное время:</span>
                    <span className="time">~{routes.length * 2} часа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default RoutePage;