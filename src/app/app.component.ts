import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  dataFromChild:any = {};

  saveDataModel:FormGroup = new FormGroup({
      item1:new FormControl("val1"),
      item2:new FormControl("val2")
  });

  setValue(event){
    this.dataFromChild = event;
  }

  numberOfColumns = 3;
}
