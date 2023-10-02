import { Schema, model } from "mongoose";
import { startOfDay } from "date-fns";

export const Medicamento = model("Medicamento", new Schema({
  principio_ativo: { type: String, required: true },
  concentracao: { type: String, required: true },
  uso_continuo: { type: Boolean, default: false },
  posologia: { type: String, required: true },
  dose: { type: String },
  tipo_receita: { type: String, required: true },
  data_inicio_tratamento: {
    type: Date, default: () => {
      startOfDay(new Date());
    }
  },
  data_fim_tratamento: { type: Date },
  recomendacoes: { type: String },


  atendimento: { type: Schema.ObjectId, required: true },
  prontuario: { type: Schema.ObjectId, required: true }
}));
