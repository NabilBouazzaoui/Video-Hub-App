import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() stuff: any;
  @Input() folderPath: string;

  title = 'app';
  initialPhoto: string;
  photo: string;
  timer: any;

  ngOnInit() {
    // Loads up the initial photo and shows it as main photo
    this.initialPhoto = this.stuff[0];
    this.photo = this.initialPhoto;
    // console.log(this.stuff);
  }

  /**
   * Starts showing preview using a time interval
   */
  public startCycle() {
    this.photo = this.initialPhoto;
    let current = 1;
    this.timer = setInterval(() => {
      this.photo = this.stuff[current];
      current++;
      if (current >= this.stuff.length) {
        current = 0;
      }
    }, 500);
  }

  /**
   * Stops preview clearing the interval
   */
  public stopCycle() {
    this.photo = this.initialPhoto;
    clearInterval(this.timer);
  }

}
