import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";
import { Medicao } from "../../models/Medicao";
import { Medicamento } from "../../models/Medicamento";
import { IMedicamento } from "../../../@types/Medicamento";

export async function registerAtendimentoUseCase(req: Request, res: Response) {
  const { subjetivo, objetivo, plano, cidadao, prontuario, prescricao_medicamento, responsavel } = req.body;
  const { atendimentoId } = req.params;

  const { antropometria, descricao } = objetivo;
  if (antropometria) {
    await Medicao.create({
      ...antropometria,
      atendimento: atendimentoId,
      prontuario
    });
    // console.log(medicoes);
  }
  if (prescricao_medicamento) {
    const new_prescricao_medicamentos = prescricao_medicamento.map((medicamento: IMedicamento) => {
      return {
        ...medicamento,
        atendimento: atendimentoId,
        prontuario
      };
    });
    await Medicamento.insertMany(new_prescricao_medicamentos);
    // console.log(medicacoes);
  }

  const atendimento = await Atendimento.findByIdAndUpdate(atendimentoId, {
    subjetivo,
    objetivo: { descricao },
    plano,
    cidadao,
    responsavel,
    prontuario,
    status_atendimento: "ATENDIMENTO_REALIZADO",
  }, {
    returnDocument: "after"
  });

  return res.json({ atendimento });

}
