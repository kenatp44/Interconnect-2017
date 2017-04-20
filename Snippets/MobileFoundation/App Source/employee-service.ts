import { Injectable } from '@angular/core';

class Employee {
  constructor(
    public _id: string,
    public _rev: string,
    public first_name: string,
    public last_name: string,
    public address: string,
    public job_title: string,
    public email: string,
    public mobile: string,
    public fax: string,
    public img: string,
    public favorite: string) { }

}

@Injectable()
export class EmployeeService {

  constructor() { }

  findAll() {
    console.log('--> in employeeService.findAll()');
    let employees: Array<any>;

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getEmployees", WLResourceRequest.GET);
      dataRequest.send().then((response) => {
        console.log('--> data loaded from employeeAdapter');
        employees = response.responseJSON.rows;
        resolve(employees);
      }, (failure) => {
        console.log('--> failed to load from employeeAdapter', failure);
        resolve('error');
      })
    });

  }

  getFavorites() {
    console.log('--> in employeeService.getFavorites()');
    let favorites: Array<any>;

    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getFavorites", WLResourceRequest.GET);
      dataRequest.send().then((response) => {
        console.log('--> data loaded from employeeAdapter.getFavorites()');
        favorites = response.responseJSON.rows;
        resolve(favorites);
      }, (failure) => {
        console.log( '--> failed in employeeService.getFavorites()', failure);
        resolve('error');
      })
    })

  }

  findById(id) {
    console.log('--> in employeeService.findById( ' + id + ')');

    return new Promise(resolve => {

      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getEmployeeDetail/", WLResourceRequest.GET);
      dataRequest.setQueryParameter("params", "['" + id + "']");

      dataRequest.send().then((response) => {
        console.log('--> data loaded from employeeAdapter');

        let JSONResponse = response.responseJSON;
        let newEmp = new Employee(
          JSONResponse._id,
          JSONResponse._rev,
          JSONResponse.first_name,
          JSONResponse.last_name,
          JSONResponse.address,
          JSONResponse.job_title,
          JSONResponse.email,
          JSONResponse.mobile,
          JSONResponse.fax,
          JSONResponse.img,
          JSONResponse.favorite);

        resolve(newEmp);

      }, (failure) => {
        console.log('--> failed to load from employeeAdapter', failure);
        resolve('error');
      })

    })
  }

  save(id, favorite) {
    console.log('--> in employeeService.save( ' + id + ': is now ' + favorite);

    return new Promise((resolve, reject) => {

      let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/updateEmployee/", WLResourceRequest.POST);
      let params      = [id, favorite];
      let JSONParams  = {'params': JSON.stringify(params)};

      dataRequest.addHeader('Content-Type', 'application/x-www-form-urlencoded');
      dataRequest.addHeader('Accept', 'application/json');
      dataRequest.sendFormParameters(JSONParams).then(
        (success) => {
          console.log('--> employeeService.save() succeeded');
          resolve('success');
        },
        (failure) => {
          console.log('--> employeeService.save() failed', failure);
          reject(failure);
        })
    })
  }
}
