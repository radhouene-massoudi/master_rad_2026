import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MaradComponent } from './marad/marad.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'detail/:idofproduct',component:DetailComponent},
  {"path":'test',component:TestComponent},
  {"path":'rad',component:MaradComponent},
  {"path":"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
