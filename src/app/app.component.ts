import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dependencies searcher';

  dependencies : Object[];

  constructor(
    private _apiService: ApiService
  ){}

  loadDependencies(searchTerm : string){
    //this.dependencies = Object.keys(mock).map(i => this.dependencies[i])
    this._apiService.searchPackage(searchTerm)
      .then((promise) => { promise.subscribe(
        datos => {
          this.dependencies = Object.entries(datos.json());
          console.log(this.dependencies);
        })
      });
  }
}
