import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild("game")
    private gameCanvas: ElementRef | undefined;
    private context: any;
    
    ngOnInit() {

    }

    ngAfterViewInit() {
        this.context = this.gameCanvas!.nativeElement.getContext("2d");
        this.context.fillRect(20, 20, 20, 20);
    }
}
