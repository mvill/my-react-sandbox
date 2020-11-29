import CptView from './views/cpt/CptView';
import HomeView from './views/home/Home';

const routes = [
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/cpt',
    component: CptView,
  },
];

export default routes;
