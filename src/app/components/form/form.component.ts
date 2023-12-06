import { Component } from '@angular/core';
import { FormConfirmGuard } from 'src/app/routeGuards/confirm.guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements FormConfirmGuard { 
  submitted = false;

  submitForm() {
    this.submitted = true;
    console.log('Form submitted successfully');
  }

  canDeactivate(): boolean {
    if (!this.submitted) {
      return window.confirm('Are you Sure?');
    }
    
    return true;
  }

  confirm(component: FormComponent): boolean {
    return this.canDeactivate();
  }
}
