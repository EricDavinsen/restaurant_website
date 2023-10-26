import Detail from '../views/pages/detail';
import MainPage from '../views/pages/mainpage';
import Like from '../views/pages/like';

const routes = {
  '/': MainPage,
  '/favorite': Like,
  '/detail/:id': Detail,
};

export default routes;
