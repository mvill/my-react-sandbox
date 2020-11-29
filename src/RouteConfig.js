import CptView from './views/cpt/CptView';
import HomeView from './views/home/Home';
import MineSwipperView from './views/minesweeper/MineSwipperView';

const routes = [
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/cpt',
    component: CptView,
  },
  {
    path: '/minesweeper',
    component: MineSwipperView,
  },
];

export default routes;
