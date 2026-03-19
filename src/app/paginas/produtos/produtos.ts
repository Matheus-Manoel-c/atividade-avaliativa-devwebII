import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { PRODUTOS } from '../../produtos-data';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './produtos.html'
})
export class Produtos {
  produtos = PRODUTOS.sort((a, b) => a.nome.localeCompare(b.nome));
}