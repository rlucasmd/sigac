import { Schema, model } from "mongoose";

export const Medicao = model("Medicao", new Schema({
  atendimento: { type: Schema.Types.ObjectId, ref: "Atendimento" },
  prontuario: { type: Schema.Types.ObjectId, ref: "Prontuario" },
  peso: { type: Number },
  altura: { type: Number },
  frequencia_cardiaca: { type: Number },
  pressao_arterial: { type: String },
  temperatura: { type: Number },
  saturacao_o2: { type: Number },
  glicemia: { type: Number },
  imc: { type: Number },
}));
