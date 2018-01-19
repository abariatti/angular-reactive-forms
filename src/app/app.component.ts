import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemePickerModule } from './theme-picker';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material Forms Starter';
  selectedUser = {
    name: 'John Doe',
    details: 'Details for ...',
    admin: false,
    cool: true
  };

  constructor(
    private _element: ElementRef,
    private _overlayContainer: OverlayContainer
  ) {}
  
  onSetStyle(event){
    console.log('onSetStyle');
    this._element.nativeElement.className = "";
    this._overlayContainer.getContainerElement().className = "";
    this._element.nativeElement.classList.add(event);
    this._overlayContainer.getContainerElement().classList.add(event);
  }
}
