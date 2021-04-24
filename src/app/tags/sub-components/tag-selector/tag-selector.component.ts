import { Component, OnInit } from '@angular/core';
import { ITag } from '../../../models/tagModels';
import { Observable, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TagDataService } from 'src/app/services/tag-data.service';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectorComponent implements OnInit {
  public tags: ITag[] = [];
  public selectedTag: ITag = this.tags[0];
  public areTagsLoaded = false;
  constructor(private tagDataService: TagDataService) { }

  ngOnInit(): void {
    this.initAllTags();
  }

  public selectTag(): void{
    console.log(`${this.selectedTag.browseName} tag was selected.`);
  }

  private initAllTags(): void {
    this.tagDataService.getAllTags()
    .subscribe({
      next: result => {
         this.tags = result as ITag[];
         this.selectedTag = this.tags[0];
         this.areTagsLoaded = true;
        } ,
      error: err => { console.log(err); }
    });
  }
}
