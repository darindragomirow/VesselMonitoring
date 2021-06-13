import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITag } from '../../../models/tagModels';
import { Observable, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TagDataService } from 'src/app/services/tag-data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectorComponent implements OnInit {
  @Output() tagSelectedEvent = new EventEmitter<ITag>();
  public tags: ITag[] = [];
  public selectedTag: ITag = this.tags[0];
  public areTagsLoaded = false;
  closeModal = '';

  constructor(
    public dashboardService: DashboardService,
    private tagDataService: TagDataService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initAllTags();
  }

  selectTag(): void {
    this.tagSelectedEvent.emit(this.selectedTag);
  }

  triggerModal(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res: any) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res: any) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
