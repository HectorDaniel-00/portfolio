import { Component } from '@angular/core';
import { HomePage } from '@features/home-page/home-page';

@Component({
  selector: 'main-layout',
  imports: [HomePage],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
