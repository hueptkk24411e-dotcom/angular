import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrl: './binding-style-component.css',
  templateUrl: './binding-style-component.html',
})

  export class BindingStyleComponent {
  progressValue: number = 35;

  getStatusColor(): string {
    if (this.progressValue <= 10) {
      return 'red';
    } else if (this.progressValue <= 20) {
      return 'orangered';
    } else if (this.progressValue <= 30) {
      return 'orange';
    } else if (this.progressValue <= 40) {
      return 'gold';
    } else if (this.progressValue <= 50) {
      return 'yellow';
    } else if (this.progressValue <= 60) {
      return 'yellowgreen';
    } else if (this.progressValue <= 70) {
      return 'lightgreen';
    } else if (this.progressValue <= 80) {
      return 'green';
    } else if (this.progressValue <= 90) {
      return 'darkgreen';
    } else {
      return 'blue';
    }
  }

  getStatus(): string {
    if (this.progressValue <= 10) {
      return 'Critical';
    } else if (this.progressValue <= 20) {
      return 'Very Low';
    } else if (this.progressValue <= 30) {
      return 'Low';
    } else if (this.progressValue <= 40) {
      return 'Below Average';
    } else if (this.progressValue <= 50) {
      return 'Average';
    } else if (this.progressValue <= 60) {
      return 'Fair';
    } else if (this.progressValue <= 70) {
      return 'Good';
    } else if (this.progressValue <= 80) {
      return 'Running Well';
    } else if (this.progressValue <= 90) {
      return 'Very Good';
    } else {
      return 'Excellent';
    }
  }
}