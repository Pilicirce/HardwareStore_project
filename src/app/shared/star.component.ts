import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    rating: number = 4;
    cropWidth: number = 75;  //75 porque es el maximo del width que pone en su html

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5; //entre 5 porque es el numero max de stars
    }

}