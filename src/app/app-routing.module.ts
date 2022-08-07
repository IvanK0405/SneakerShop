import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './pages/product/product.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {NewsComponent} from './pages/news/news.component';


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
