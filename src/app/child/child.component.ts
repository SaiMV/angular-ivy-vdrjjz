import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() eventEm = new EventEmitter();

  constructor(private cs: CommonService) {}

  ngOnInit() {
    // this.eventEm.emit(this.cs.getProdList());
    this.cs.getSentRequestInst().subscribe((data) => {
      this.eventEm.emit(data);
    });
    this.cs.getProdList();
  }
}
