import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ProductList } from './features/product/product-list/product-list';
import { ProductDetail } from './features/product/product-detail/product-detail';
import { Cart } from './core/services/cart';
import { Checkout } from './features/order/checkout/checkout';
import { AuthGuard } from './core/guards/auth-guard';
import { ProductHome } from './features/product/product-home/product-home';

export const routes: Routes = [

  // ===================== DEFAULT =====================
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  // ===================== AUTH =====================
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },

  // ===================== PRODUCTS =====================
  {
    path: 'products',
    component: ProductList
  },
  {
    path: 'products/:id',
    component: ProductDetail
  },
  {
    path: '',
    component: ProductHome
  },

  // ===================== CART =====================
  {
    path: 'cart',
    component: Cart,
    canActivate: [AuthGuard]
  },

  // ===================== ORDER =====================
  {
    path: 'checkout',
    component: Checkout,
    canActivate: [AuthGuard]
  },

  // ===================== WILDCARD =====================
  {
    path: '**',
    redirectTo: 'products'
  }
];