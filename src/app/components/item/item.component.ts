import { Component, Input } from "@angular/core";
import { IProduct } from "../../models/product"; 

@Component({
    selector: 'app-item-view',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemViewComponent {
    @Input() product: IProduct

    details = false
}