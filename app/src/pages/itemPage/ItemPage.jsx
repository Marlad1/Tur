// ItemPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/button/button";
import { landmarkRepository } from "../../services/repositories/landmarksRepository";
import './ItemPage.css'

const ItemPage = () => {
    const { id } = useParams(); // Получаем ID из URL
    const [landmark, setLandmark] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Имитация загрузки данных
        setTimeout(() => {
            const item = landmarkRepository.getLandmarkById(Number(id));
            setLandmark(item);
            setLoading(false);
        }, 100);
    }, [id]);

    if (loading) {
        return (
            <div className="App">
                <Header />
                <div className="loading-container">
                    <p>Загрузка...</p>
                </div>
            </div>
        );
    }

    if (!landmark) {
        return (
            <div className="App">
                <Header />
                <div className="error-container">
                    <p>Достопримечательность не найдена</p>
                    <Link to="/">
                        <Button text="Вернуться на главную" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <div className="item-detail-container">
                <div className="item-detail-image">
                    <img src={landmark.imageUrl} alt={landmark.title} />
                </div>
                <div className="item-detail-content">
                    <h1 className="item-detail-title">{landmark.title}</h1>
                    {landmark.description && (
                        <p className="item-detail-description">{landmark.description}</p>
                    )}
                    {landmark.price && (
                        <p className="item-detail-price">Цена: {landmark.price} руб.</p>
                    )}
                    {landmark.rating && (
                        <p className="item-detail-rating">Рейтинг: {landmark.rating}/5</p>
                    )}
                    {landmark.mapUrl && (
                        <div className="item-detail-map">
                            <h3>Расположение на карте:</h3>
                            {landmark.mapUrl}
                        </div>
                    )}
                    <Link to="/">
                        <Button text="Назад к списку" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Выносим header в отдельный компонент для переиспользования
const Header = () => (
    <header className="App-header">
        <div className='App-line'>
            <div className="left-thing-container">
                <img className={"left-thing-image"} src={"/header_thing_left.png"} alt="Декоративный элемент" />
            </div>
            <div className="header-title-container">
                <p className={"header-title"}>Курорты Белокурихи</p>
            </div>
            <div className="right-thing-container">
                <img className={"right-thing-image"} src={"/header_thing_right.png"} alt="Декоративный элемент" />
            </div>
        </div>
    </header>
);

export default ItemPage;