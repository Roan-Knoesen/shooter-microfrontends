import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { Shooter } from 'libs/shooter-form/src/shooter';
import { GetShootersService } from '../get-shooters.service';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule, RouterOutlet],
  selector: 'shooter-microfrontends-shooter-card-entry',
  template: `<div class="container" id="main-container">
  <div class="row">
      <div *ngFor="let shooter of shooters" class="col-md-6 col-xl-3">
          <div class="card m-b-30">
              <div class="card-body row">
                  <div class="col-6">
                      <a href=""><img src= "{{shooter?.imageurl}}" alt="" class="img-fluid rounded-circle w-60"></a>
                  </div>
                  <div class="col-6 card-title align-self-center mb-0">
                      <h5>{{shooter?.name}} {{shooter?.surname}}</h5>
                      <p class="m-0">Caliber: {{shooter?.caliber}}</p>
                  </div>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Member Code : {{shooter?.code}}</li>
                  <li class="list-group-item">Shooter ID : {{shooter?.id}}</li>
                  <li class="list-group-item"><i class="fa fa-phone float-right"></i>Phone : {{shooter?.number}}</li>
              </ul>
              <div class="card-body">
                  <div class="float-right btn-group btn-group-sm">
                      <a class="btn btn-primary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i> </a>
                      <a class="btn btn-secondary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-times"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`,
})
export class RemoteEntryComponent implements OnInit{

  public shooters: Shooter[] = [];
  public editShooter: Shooter | undefined;

  constructor(private shooterService: GetShootersService, private router: Router) {}

  ngOnInit() {
    this.getShooters();
  }

  public getShooters(): void{
    this.shooterService.getShooters().subscribe(
        (response: Shooter[]) => {
          this.shooters = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
  }
}
