export type listaAtendimentosType = {
  _id: string;
  responsavel: {
    _id: string;
    nome: string;
  },
  status_atendimento: "EM_ATENDIMENTO" | "NAO_AGUARDOU" | "AGUARDANDO_ATENDIMENTO" | "ATENDIMENTO_FINALIZADO";
  cidadao: {
    _id: string;
    nome: string;
    data_nascimento: string;
  }
}
