import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];
