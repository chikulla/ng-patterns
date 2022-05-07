import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RememberFormComponent } from './remember-form/remember-form.component'
import { TopIndexComponent } from './top-index/top-index.component'

export const routes: Routes = [{
  component: TopIndexComponent,
  path: '',
}, {
  component: RememberFormComponent,
  path: 'remember-form'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
