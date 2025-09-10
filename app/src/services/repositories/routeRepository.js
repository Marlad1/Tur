

// Репозитор для выбранных пользователем достопримечательностей
class RouteRepository {
	constructor() {
    this.key = 'user_routes';
  }

	getRoutes() {
    const routes = localStorage.getItem(this.key);
    return routes ? JSON.parse(routes) : [];
  }

	addRoute(data) {
    const routes = this.getRoutes();
    // Проверяем, нет ли уже этого элемента в маршруте
    if (!routes.some(item => item.id === data.id)) {
      routes.push(data);
      localStorage.setItem(this.key, JSON.stringify(routes));
    }
    return routes;
  }

	removeRoute(id) {
    const routes = this.getRoutes();
    const updatedRoutes = routes.filter(item => item.id !== id);
    localStorage.setItem(this.key, JSON.stringify(updatedRoutes));
    return updatedRoutes;
  }
}

export const routeRepository = new RouteRepository(); 