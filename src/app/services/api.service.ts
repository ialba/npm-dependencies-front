import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  BaseRequestOptions
 } from '@angular/http';

@Injectable()
export class ApiService extends Http {

  private _baseUrl : string = "http://localhost:3000/";

  constructor(
    backend: XHRBackend,
    baseRequestOptions : BaseRequestOptions
  ) {
    super(backend, baseRequestOptions);
  }

  async searchPackage(searchTerm:string){
    return super.get(this._baseUrl+'npm/dependencies/'+searchTerm);
  }
}
