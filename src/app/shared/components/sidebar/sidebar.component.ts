import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {



  isActive = false;

  constructor(private router: Router) { }

  isActived() {
    this.isActive = !this.isActive;

  }


}
