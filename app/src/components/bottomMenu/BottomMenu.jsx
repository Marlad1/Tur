import { Link, useLocation } from "react-router-dom"
import './BottomMenu.css'

const BottomMenu = () => {
	const location = useLocation();

	const menuItems = [
		{ path: '/main', icon: '🏠', label: 'Главная' },
    	{ path: '/route', icon: '⭐', label: 'Маршрут' }
	];

	return (
		<nav className="bottom-nav">
		  <div className="nav-container">
			{menuItems.map((item) => (
			  <Link
				key={item.path}
				to={item.path}
				className={`nav-item ${location.pathname === item.path ? 'nav-item-active' : ''}`}
			  >
				<div className="nav-icon-wrapper">
				  <div className="nav-icon">{item.icon}</div>
				  {location.pathname === item.path && (
					<div className="active-indicator"></div>
				  )}
				</div>
				<span className="nav-label">{item.label}</span>
			  </Link>
			))}
		  </div>
		</nav>
	  );
};

export default BottomMenu;