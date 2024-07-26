import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ReportsComponent } from './admin-pages/reports/reports.component';
import { MembersComponent } from './admin-pages/members/members.component';
import { AdminHomeComponent } from './admin-pages/home/home.component';
import { AdminLayoutComponent } from './admin-pages/admin-layout/admin-layout.component';

const routes: Routes = [
{path:"", component:LayoutComponent,children:[
  { path: '', component: HomeComponent },
  { path: 'hakkimizda', component: AboutComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'galeri', component: GalleryComponent },

]



},
  
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: '/', component: AdminHomeComponent },
      { path: 'kullanicilar', component: MembersComponent },
      { path: 'raporlar', component: ReportsComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
