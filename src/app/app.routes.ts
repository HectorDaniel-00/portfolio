import { Routes } from '@angular/router';
import { loadingResolver } from '@core/resolvers/loading-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@layout/main-layout/main-layout').then((m) => m.MainLayout),
    resolve: {
      delay: loadingResolver,
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('@features/not-found-page/not-found-page').then((m) => m.NotFoundPage),
    resolve: {
      delay: loadingResolver,
    },
  },
];
