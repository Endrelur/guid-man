import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './view.component.html',
})
export class ViewComponent {}
