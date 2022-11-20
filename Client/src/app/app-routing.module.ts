import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingDonationComponent } from './page/Donations/adding-donation/adding-donation.component';

const routes: Routes = [
  { path: '', component: AddingDonationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
