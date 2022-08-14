import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './pages/products/products.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {NewsComponent} from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'news', component: NewsComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
