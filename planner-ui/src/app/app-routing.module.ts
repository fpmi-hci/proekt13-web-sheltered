import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: '/profile', component: ProfileComponent },
  { path: '/settings', component: AccountSettingsComponent },
  { path: '/tracker', component: MealTrackerComponent },
  { path: '/products', component: ProductListComponent },
  { path: '/recipes', component: RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
