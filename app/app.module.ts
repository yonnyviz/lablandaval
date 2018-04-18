import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { QuienesSomosComponent } from './content/quienes-somos/quienes-somos.component';
import { MisionVisionComponent } from './content/mision-vision/mision-vision.component';
import { MarcasComponent } from './content/marcas/marcas.component';
import { ContactenosComponent } from './content/contactenos/contactenos.component';
import { ProyectoIndustrialComponent } from './content/proyecto-industrial/proyecto-industrial.component';
import { BlogPostComponent } from './content/blog-post/blog-post.component';

const appRuotes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'proyecto-industrial', component: ProyectoIndustrialComponent },
  { path: 'blog-post', component: BlogPostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    QuienesSomosComponent,
    MisionVisionComponent,
    MarcasComponent,
    ContactenosComponent,
    ProyectoIndustrialComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
       appRuotes,
       { enableTracing: true }
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
