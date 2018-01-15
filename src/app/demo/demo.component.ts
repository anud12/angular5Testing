import { Component, OnInit } from '@angular/core';
import {ComponentService} from "../component.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public value: number;
  public text: String;
  public text2: String;

  constructor(private componentService: ComponentService) {
  }

  ngOnInit() {
    this.value = this.componentService.getValue();
    if (this.value % 2 === 0) {
      this.text = this.componentService.toUpperCase(this.value.toString());
      this.text2 = this.componentService.toUpperCase(this.text.toString());
    }
  }

}
