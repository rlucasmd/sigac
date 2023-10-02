export type IMedicamento = {
  principio_ativo: string,
  concentracao: string,
  uso_continuo?: boolean,
  posologia: string,
  dose: string,
  tipo_receita: string,
  data_inicio_tratamento?: Date,
  data_fim_tratamento?: Date,
  recomendacoes?: string,
};
