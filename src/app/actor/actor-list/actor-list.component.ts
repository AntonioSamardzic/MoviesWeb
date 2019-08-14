import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  constructor(
    private actorService: ActorService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: SpinnerService
  ) { }

  public actors = [];

  ngOnInit() {
    this.actorService.getAll().subscribe((response: any) => {
      this.actors = response;
    });
  }

  onAdd() {
  this.router.navigate (['actors/new']);
  }

  onEdit(actorId) {
    this.router.navigate(['actors', actorId]);


  }

  getAllActors() {
    this.actorService.getAll().subscribe((response: any) => {
      this.actors = response;
    });
  }

  onDelete(actorId) {
    if (confirm('Da li ste sigurni?')) {
      this.actorService.deleteOne(actorId).subscribe(result => {
        this.getAllActors();
        this.toastr.success('Bravo frajeru.');
      });
    }
  }

  onSelect(index: number) {
    console.log(index);
  }


}
