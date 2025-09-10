import { useEffect, useState } from "react";
import Button from "../../components/button/button"
import ItemInfo from "../../components/item/item";
import { landmarkRepository } from "../../services/repositories/landmarksRepository";
import './MainPage.css'


// Главная страница со всеми достопримечательностями
const MainPage = () => {
	const [landmarks, setLandmarks] = useState([]);

	useEffect(() => {
		const data = landmarkRepository.getLandmarks();
		setLandmarks(data);
	}, []);

  return (
    <div className="App">
      <header className="App-header">
          <div className='App-line'>
              <div className="left-thing-container">
                  <img className={"left-thing-image"} src={"/header_thing_left.png"}></img>
              </div>
              <div className="header-title-container">
                  <p className={"header-title"}>Курорты Белокурихи</p>
              </div>
              <div className="right-thing-container">
                  <img className={"right-thing-image"} src={"/header_thing_right.png"}></img>
              </div>
          </div>
      </header>
        <div className='change-dom'>
        <Button text={"Места"}/>
            <Button text={"Чебубеки"}/>
        </div>
        <div className="items-container">
      {landmarks.map((item) => (
        <ItemInfo
          key={item.id}
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
    </div>
  );
}

export default MainPage;