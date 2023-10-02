import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";

export async function setCidadaoNaoAguardouUseCase(req: Request, res: Response) {
  const { atendimentoId } = req.params;
  const atendimento = await Atendimento.findById(atendimentoId, "status_atendimento");
  // console.log(atendimento);
  if (!atendimento) {
    return res.status(400).json({ error: "Não foi possivel encontrar o atendimento." });
  }
  if (atendimento.status_atendimento === "EM_ATENDIMENTO") {
    return res.status(400).json({ error: "Não foi possivel cancelar o atendimento, pois o atendimento está acontecendo." });
  }
  await Atendimento.findByIdAndUpdate(atendimentoId, {
    $set: {
      status_atendimento: "NAO_AGUARDOU"
    }
  }, {
    returnDocument: "after"
  });

  return res.json({ atendimento });
}
