import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { UserGuard } from './user-guard.guard';
import { AdminGuard } from './admin-guard.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProductsComponent },
    { path: 'create-order', component: CreateOrderComponent },
    { path: 'my-order', component: MyOrdersComponent},
    {path:'user-auth',component:UserAuthComponent,},
    {path:'admin-auth',component:AdminAuthComponent,},
    {path:'admin',component:AdminComponent},
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
