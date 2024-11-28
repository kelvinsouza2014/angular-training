import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
  <!-- <router-outlet /> -->
  <h1>Angular Training</h1>
  <app-template-binding />
  <app-new-component />
  `,
})
export class AppComponent {
  title = 'angular_training';
}
// <router-outlet />
