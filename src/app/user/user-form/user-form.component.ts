import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private spinner: SpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public user: any = {};
  public errorMessage = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');

      if (userId != null) {
        this.getUser(userId);
      }
    });
  }

  getUser(userId) {
    this.userService.getOne(userId).subscribe(response => {
      this.user = response;
      this.spinner.hide();
    });
  }

  onSubmit() {
    this.spinner.show();

    this.userService.submit(this.user).subscribe(
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
