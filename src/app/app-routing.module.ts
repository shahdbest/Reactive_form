import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Implement the routes for BlogComponent with path as 'addblog'
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// AppRoutingModule is responsible for routing to all the components
export class AppRoutingModule { }
