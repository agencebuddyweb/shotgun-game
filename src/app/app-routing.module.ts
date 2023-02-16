import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotCreateComponent } from './pages/bot-create/bot-create.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // Pages.
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create-bot',
    component: BotCreateComponent,
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
