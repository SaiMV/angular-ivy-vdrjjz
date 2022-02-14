import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommonService } from './common.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParentComponent, ChildComponent, HighlightDirective],
  
  bootstrap: [AppComponent],
  providers: [CommonService],
})
export class AppModule {}
