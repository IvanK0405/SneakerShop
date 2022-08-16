import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewsComponent } from "./news/news.component";
import { ProductComponent } from "./products/products.component";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        ProductComponent,
        AboutComponent,
        NewsComponent,
        ContactsComponent,
        LoginComponent
    ],
    bootstrap: [ ProductComponent ],
    imports: [ BrowserModule,],
    exports: [],
    providers: []
})
export class AppPagesModule { }