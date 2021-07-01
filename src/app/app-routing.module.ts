import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home/home.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotoListComponent },
  { path: 'photo/:id', component: PhotoDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
