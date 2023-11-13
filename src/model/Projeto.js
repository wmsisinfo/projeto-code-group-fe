export class ProjetoDto {
  constructor(
    id,
    nome,
    dataInicio,
    dataPrevisaoFim,
    dataFim,
    descricao,
    status,
    orcamento,
    risco,
    idGerente
  ) {
    this.id = id;
    this.nome = nome;
    this.dataInicio = dataInicio;
    this.dataPrevisaoFim = dataPrevisaoFim;
    this.dataFim = dataFim;
    this.descricao = descricao;
    this.status = status;
    this.orcamento = orcamento;
    this.risco = risco;
    this.idGerente = idGerente;
  }
}

export default ProjetoDto;
