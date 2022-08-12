import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewsComponent } from "./news/news.component";
import { ProductComponent } from "./products/products.component";

@NgModule({
    declarations: [
        ProductComponent,
        AboutComponent,
        NewsComponent,
        ContactsComponent
    ],
    bootstrap: [ ProductComponent ],
    imports: [],
    exports: [],
    providers: []
})
export class AppPagesModule { }