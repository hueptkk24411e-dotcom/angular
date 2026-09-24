import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  standalone: false,
  styleUrl: './binding-class-component.css',
  templateUrl: './binding-class-component.html',
})
export class BindingClassComponent {
  public isSaved: boolean = false;
  public isActive: boolean = true;

  public toggleSaveState(): void {
    this.isSaved = !this.isSaved;
  }
}