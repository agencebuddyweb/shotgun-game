import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { RankItemComponent } from './partials/rank-item/rank-item.component';
import { BotCreateComponent } from './pages/bot-create/bot-create.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { DualDetailComponent } from './pages/dual-detail/dual-detail.component';
import { CampaignComponent } from './pages/campaign/campaign.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Error404Component, HeaderComponent, FooterComponent, RankItemComponent, BotCreateComponent, RankingComponent, DualDetailComponent, CampaignComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
