import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent},
  { path: 'list', component: ListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
]

export const routing = RouterModule.forRoot(appRoutes);
