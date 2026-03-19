import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUTOS } from '../../produtos-data';

@Component({
  selector: 'app-detalhamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhamento.html'
})
export class Detalhamento {

  produto: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = PRODUTOS.find(p => p.id === id);
  }
}