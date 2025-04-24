import { lazy } from 'react';
import BasketPage from './pages/Basket/BasketPage';

const HomePage = lazy(() => import('./pages/Home'));

export const routes = [
  {
    to: '/',
    text: 'Home',
    activeNames: ['/home', '/'],
    Component: HomePage,
  },
  {
    to: '/basket',
    text: 'Basket',
    activeNames: ['/basket'],
    Component: BasketPage
  }
];
