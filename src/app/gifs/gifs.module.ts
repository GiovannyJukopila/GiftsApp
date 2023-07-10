import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
