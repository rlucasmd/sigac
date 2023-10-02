import { Schema, model } from "mongoose";

export const Cidadao = model("Cidadao", new Schema({
  nome: { type: String, required: true },
  nome_pai: { type: String },
  nome_mae: { type: String, required: true },
  cpf: { type: String, required: true },
  cns: { type: String, required: true },
  data_nascimento: { type: String, required: true },
  data_atualizado: { type: Date, required: true, default: Date.now() },
  sexo: { type: String, required: true },
  endereco: {
    uf: { type: String },
    municipio: { type: String },
    bairro: { type: String },
    tipo_logradouro: {
      type: String,
      enum: ["RUA", "TRAVESSA", "AVENIDA", "SITIO"]
    },
    logradouro: { type: String },
    numero: { type: Number },
    complemento: { type: String },
  },
  localidade_nascimento: {
    uf: { type: String },
    municipio: { type: String }
  },
  prontuario: { required: true, type: Schema.Types.ObjectId, ref: "Prontuario" }

}));
