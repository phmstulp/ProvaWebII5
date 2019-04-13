import { Component, OnInit, ViewChild } from '@angular/core';
import { Veiculo } from './models/veiculo';
import { MatPaginator, MatSort, MatTableDataSource } from '../../../../node_modules/@angular/material';
import { Cor } from './models/cor';

@Component({
  selector: 'app-lavacar',
  templateUrl: './lavacar.component.html',
  styleUrls: ['./lavacar.component.css']
})
export class LavacarComponent implements OnInit {

  displayedColumns: string[] = ['actionsColumn', 'codigo', 'placa', 'renavan', 'chassi', 'marca', 'modelo', 'ano', 'cor'];

  public veiculo: Veiculo = new Veiculo();
  public veiculos: Array<Veiculo>;
  public dataSource: any;
  public palavraChave: string;
  public isExpandido: number;
  public veiculoSelId: number;
  public veiculoSel: Veiculo = new Veiculo();
  public cores: any;
  public cor: Cor;
  public editarVeiculo: boolean = false;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.veiculos = new Array<Veiculo>();
    this.carregaCores(); 
  }

  carregaCores() {
    this.cores = new Array<Cor>();
    this.cor = new Cor();
    this.cor.corId = 1;
    this.cor.descricao = "Branco";
    this.cores.push(this.cor);

    this.cor = new Cor();
    this.cor.corId = 2;
    this.cor.descricao = "Preto";
    this.cores.push(this.cor);

    this.cor = new Cor();
    this.cor.corId = 3;
    this.cor.descricao = "Prata";
    this.cores.push(this.cor);
  }

  salvarVeiculo() {
    if (this.editarVeiculo) {
      this.editarVeiculo = false;
    } else {
      console.log("Veiculo Salvo");
      console.log(this.veiculo);
      this.veiculos.push(this.veiculo);
      console.log("Lista de Veiculos");
      console.log(this.veiculos);
      this.veiculo = new Veiculo();
      this.editarVeiculo = false;
    }
    this.atualizaTable();
  }

  atualizarVeiculo() {

  }

  aplicarFiltro(valor: string){
    valor = valor.trim();
    valor = valor.toLowerCase();
    console.log("Realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Veiculo, filter: string ) => 
      data.placa.toLowerCase().indexOf(filter) != -1 ||
      data.chassi.toLowerCase().indexOf(filter) != -1 ||
      data.marca.toLowerCase().indexOf(filter) != -1 ||
      data.modelo.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  excluir(codigo: number){
    this.veiculos.splice(this.veiculos.findIndex
      (d => d.codigo === codigo), 1);
    console.log("Lista de Veiculos");
    console.log(this.veiculos);
    this.atualizaTable();
  }

  editar(codigo: number){
    alert("Editar ==> " + codigo);
    let veiculoUpdate;
    this.veiculos.forEach(item => {
      if (item.codigo == codigo) {
        veiculoUpdate = item;
      }
    });
    this.veiculo = veiculoUpdate;
    this.editarVeiculo = true;
  }
  

  atualizarCor() {

  }

  atualizaTable() {
    this.dataSource = new MatTableDataSource<Veiculo>(this.veiculos);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

}
