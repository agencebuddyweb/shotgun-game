import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BotCreateComponent } from './pages/bot-create/bot-create.component'
import { CampaignComponent } from './pages/campaign/campaign.component'
import { DualDetailComponent } from './pages/dual-detail/dual-detail.component'
import { Error404Component } from './pages/errors/error404/error404.component'
import { HomeComponent } from './pages/home/home.component'
import { RankingComponent } from './pages/ranking/ranking.component'

const routes: Routes = [
  // Pages.
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-bot',
    component: BotCreateComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'dual',
    component: DualDetailComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
