import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  public newTag: string = '';

  constructor(private gifsService: GifsService) {}
  searchTag() {
    this.newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(this.newTag);
    this.tagInput.nativeElement.value = '';
    this.newTag = '';
  }
}
