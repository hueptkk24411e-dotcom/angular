import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name1: string = "Pham Thi Kim Hue";
  public email1: string = "hueptkk2411e@st.uel.edu.vn";
  public nameid1: string = "nameid1";
  public emailid1: string = "emailid1";
  public isDisabled1: boolean = true;
  public hello: string = "Hey! how is going?";
  public advanced_mesage: string='<font color="blue">This is a message from parent component</font>';
}