import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'products', component: ProductsComponent},
    {path:'products/:productId', component: ProductDetailComponent},
    {path:'contact', component: ContactComponent},
    {path:'**', redirectTo:'', pathMatch: 'full'}
]