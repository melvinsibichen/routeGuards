import { CanDeactivate } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { Injectable } from '@angular/core';
export interface ConfirmGuard {
  canDeactivate(component: FormComponent): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FormConfirmGuard implements CanDeactivate<FormComponent>, ConfirmGuard {
  canDeactivate(component: FormComponent): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  confirm(component: FormComponent): boolean {
    return this.canDeactivate(component);
  }
}
