import { Routes } from '@angular/router';
import { AppChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: AppChildComponent },
];
