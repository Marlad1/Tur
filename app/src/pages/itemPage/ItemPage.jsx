import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/button/button";
import { landmarkRepository } from "../../services/repositories/landmarksRepository";
import { routeRepository } from "../../services/repositories/routeRepository";
import './ItemPage.css'

const ItemPage = () => {
    const { id } = useParams();
    const [landmark, setLandmark] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const item = landmarkRepository.getLandmarkById(Number(id));
            setLandmark(item);
            
            // Проверяем, добавлен ли уже в маршрут
            const routes = routeRepository.getRoutes();
            setIsAdded(routes.some(route => route.id === item?.id));
            
            setLoading(false);
        }, 100);
    }, [id]);

    const handleAddToRoute = () => {
        if (landmark) {
            routeRepository.addRoute(landmark);
            setIsAdded(true);
        }
    };

    const handleRemoveFromRoute = () => {
        if (landmark) {
            routeRepository.removeRoute(landmark.id);
            setIsAdded(false);
        }
    };

    if (loading) {
        return (
            <div className="item-page">
                <Header />
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Загружаем информацию...</p>
                </div>
            </div>
        );
    }

    if (!landmark) {
        return (
            <div className="item-page">
                <Header />
                <div className="error-container">
                    <div className="error-icon">❌</div>
                    <h2>Достопримечательность не найдена</h2>
                    <p>Возможно, она была удалена или перемещена</p>
                    <Link to="/">
                        <Button text="Вернуться на главную" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="item-page">
            <Header />
            
            <div className="item-detail-container">
                <div className="item-detail-hero">
                    <div className="item-detail-image">
                        <img src={landmark.imageUrl} alt={landmark.title} />
                        {landmark.onSale && (
                            <div className="sale-badge">🔥 Скидка</div>
                        )}
                    </div>
                    
                    <div className="item-detail-actions">
                        <div className="price-section">
                            {landmark.price && (
                                <div className="item-price">
                                    <span className="price-label">Стоимость:</span>
                                    <span className="price-value">{landmark.price} ₽</span>
                                </div>
                            )}
                            
                            {isAdded ? (
                                <button
                                    onClick={handleRemoveFromRoute}
                                    className="button remove-button"
                                >🗑️ Удалить из маршрута</button>
                            ) : (
                                <button
                                    onClick={handleAddToRoute}
                                    className="button add-button"
                                >⭐ Добавить в маршрут</button>
                            )}
                        </div>
                        
                        <Link to="/" className="back-link">
                            <button className="button add-button back-link">← Назад к списку</button>
                        </Link>
                    </div>
                </div>

                <div className="item-detail-content">
                    <div className="content-header">
                        <h1 className="item-detail-title">{landmark.title}</h1>
                        {landmark.rating && (
                            <div className="rating-badge">
                                ⭐ {landmark.rating}/5
                            </div>
                        )}
                    </div>

                    {landmark.description && (
                        <div className="description-section">
                            <h3>📖 Описание</h3>
                            <p className="item-detail-description">{landmark.description}</p>
                        </div>
                    )}

                    {landmark.mapUrl && (
                        <div className="map-section">
                            <h3>🗺️ Расположение на карте</h3>
                            <div className="map-container">
                                {landmark.mapUrl}
                            </div>
                        </div>
                    )}

                    <div className="additional-info">
                        <div className="info-card">
                            <h4>⏰ Рекомендуемое время</h4>
                            <p>2-3 часа</p>
                        </div>
                        <div className="info-card">
                            <h4>👥 Для кого</h4>
                            <p>Взрослые и дети</p>
                        </div>
                        <div className="info-card">
                            <h4>🌤️ Лучшее время</h4>
                            <p>Круглый год</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Header = () => (
    <header className="item-header">
        <div className="header-content">
            <div className="header-title-wrapper">
                <h1 className="header-title">🏔️ Я в Белокурихе!</h1>
                <p className="header-subtitle">Детальная информация</p>
            </div>
        </div>
    </header>
);

export default ItemPage;