import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { Favoritos } from './pages/favoritos/favoritos';

export const routes: Routes = [
    { path: 'catalogo', component: Catalogo },
    { path: 'favoritos', component: Favoritos },
    { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
    { path: '**', redirectTo: 'catalogo' }
];