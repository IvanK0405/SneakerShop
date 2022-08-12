import { Component, Input } from "@angular/core";
import { IProduct } from "../../models/product"; 

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ProductComponent {
    @Input() product: IProduct

    details = false
}