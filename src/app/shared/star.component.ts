import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;  //75 porque es el maximo del width que pone en su html
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter <string> ();


    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5; //entre 5 porque es el numero max de stars
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}