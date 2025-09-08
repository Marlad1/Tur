
const routes = [];

// Репозитор для выбранных пользователем достопримечательностей
class RouteRepository {
	getRoutes() {
		return routes;
	}

	addRoute(data) {
		routes.push(data);
	}
}

export const routeRepository = new RouteRepository(); 