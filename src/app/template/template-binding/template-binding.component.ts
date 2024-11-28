import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Kelvin Souza';
  public luckyNumber = 3;
  public condition = this.luckyNumber > 2 ? "True." : "False."
}
