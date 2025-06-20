// src/app/app.routes.ts
import { Routes }                 from '@angular/router';
import { HomeComponent }          from './pages/home/home.component';
import { ContatoComponent }       from './pages/contato/contato.component';
import { PortfolioComponent }     from './pages/portfolio/portfolio.component';
import { ExperiencesComponent }   from './pages/experiences/experiences.component';
import { EducationsComponent }    from './pages/educations/educations.component';  // ← import adicionado
import { CertificatesComponent } from './pages/certificates/certificates.component';

export const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'portfolio',   component: PortfolioComponent },
  { path: 'contato',     component: ContatoComponent },
  { path: 'experience',  component: ExperiencesComponent },
  { path: 'education',   component: EducationsComponent }, 
    { path: 'certificates',   component: CertificatesComponent }, 
  { path: '**',          redirectTo: '', pathMatch: 'full' }
];
