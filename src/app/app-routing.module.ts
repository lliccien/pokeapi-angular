import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DexComponent } from './pages/dex/dex.component';
import { DexDetailsComponent } from './pages/dex-details/dex-details.component';
import { PageNoFoundComponent } from './shared/components/page-no-found/page-no-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: DexComponent
  },
  {
    path:'details/:name',
    component: DexDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
