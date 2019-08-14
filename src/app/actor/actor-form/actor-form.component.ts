import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService,
    private spinner: SpinnerService,
    private router: Router,
    private toastr: ToastrService
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
      this.spinner.hide();
    });
  }

  onSubmit() {
    this.spinner.show();

    this.actorService.submit(this.actor).subscribe(
      () => {
        this.toastr.success('Uspješno izvršeno!');
        this.router.navigate(['users']);
        this.spinner.hide();
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
        this.spinner.hide();
      });
  }

}
