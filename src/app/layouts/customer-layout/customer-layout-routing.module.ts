import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer/introduction',
    loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLayoutRoutingModule { }
