import { Schema, model } from "mongoose";
// import { format, startOfDay } from "date-fns";

export const Atendimento = model("Atendimento", new Schema({
  subjetivo: {
    descricao: { type: String },
    motivo_consulta: { type: String },
  },
  objetivo: {
    descricao: { type: String },
  },
  responsavel: { type: Schema.Types.ObjectId, ref: "Profissional" },
  status_atendimento: {
    type: String,
    enum: ["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIMENTO_REALIZADO", "NAO_AGUARDOU"],
    default: "AGUARDANDO_ATENDIMENTO"
  },
  cidadao: { type: Schema.Types.ObjectId, ref: "Cidadao" },
  prontuario: { type: Schema.Types.ObjectId, ref: "Prontuario" },
  data_atendimento: {
    type: Date, default: () => {
      return new Date();
    }
  }
}));
