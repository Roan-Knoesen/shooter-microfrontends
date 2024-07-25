import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'shooter-microfrontends-shooter-card-entry',
  template: `<div class="container" id="main-container">
  <div class="row">
      <div class="col-md-6 col-xl-3">
          <div class="card m-b-30">
              <div class="card-body row">
                  <div class="col-6">
                      <a href=""><img src= "https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="img-fluid rounded-circle w-60"></a>
                  </div>
                  <div class="col-6 card-title align-self-center mb-0">
                      <h5>Name Surname</h5>
                      <p class="m-0">Caliber</p>
                  </div>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Member Code : code</li>
                  <li class="list-group-item">Shooter ID : id</li>
                  <li class="list-group-item"><i class="fa fa-phone float-right"></i>Phone : number</li>
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
export class RemoteEntryComponent {}
