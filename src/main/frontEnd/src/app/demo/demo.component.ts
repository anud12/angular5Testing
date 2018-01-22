import {Component, OnInit} from '@angular/core';
import {ComponentService} from "../component.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public raw: String;
  public text: String;
  public title: String;

  constructor(private componentService: ComponentService) {
  }

  ngOnInit() {
    this.title = "Demo App"
    this.componentService.getFromServer().subscribe(value => {

      this.raw = value;
      if (this.raw === "Hello world") {
        this.text = this.componentService.toUpperCase(this.raw);
      }
      else {
        this.text = value;
      }
      this.title = this. componentService.toUpperCase(this.title);
    })
  }

}
