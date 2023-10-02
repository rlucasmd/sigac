import { Schema, model } from "mongoose";

export const Prontuario = model("Prontuario", new Schema({
  alergias: [
    {
      categoria: { type: String, required: true },
      grau: { type: String, enum: ["BAIXO", "MODERADO", "ALTO"], required: true },
      descricao: { type: String, required: true },
    }
  ],
  antecedentes: [
    {
      cidadao: {
        descricao: { type: String, required: true },
        antecedentes_hospitalares: [
          {
            titulo: { type: String, required: true },
            descricao: { type: String, required: true },
          }
        ]
      },
      familiar: [{
        nome_problema: { type: String, required: true },
        descricao: { type: String, required: true },
      }]
    }
  ],
  problema_condicao: [{
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
  }],
  medicamentos: [
    {
      nome: { type: String, required: true },
      principio_ativo: { type: String, required: true },
      posologia: { type: String, required: true },
      dose: { type: String, required: true },
    }
  ]
}));
