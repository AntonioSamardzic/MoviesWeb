import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActorService } from '../actor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location

  ) { }


  public actor: any = {};
  public errorMessage = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const actorId = params.get('id');

      if (actorId != null) {
        this.getActor(actorId);
      }
    });
  }

  getActor(actorId) {
    this.actorService.getOne(actorId).subscribe(response => {
      this.actor = response;
    });
  }

  onSubmit() {

    this.actorService.submit(this.actor).subscribe(
      (response: any) => {
        this.toastr.success('Uspješno izvršeno!');
        this.router.navigate(['actors']);

      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];

      });
  }

  goBack() {
    this.location.back();
    return false;
  }

}
