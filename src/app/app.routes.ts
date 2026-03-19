import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Produtos } from './paginas/produtos/produtos';
import { Detalhamento } from './paginas/detalhamento/detalhamento';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'detalhe/:id', component: Detalhamento }
];