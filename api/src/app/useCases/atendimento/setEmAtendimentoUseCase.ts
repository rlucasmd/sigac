import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";

export async function setEmAtendimentoUseCase(req: Request, res: Response) {
  const { atendimentoId, responsavel } = req.body;
  const atendimento = await Atendimento.findOneAndUpdate(atendimentoId, {
    $set: {
      status_atendimento: "EM_ATENDIMENTO",
      responsavel,
    }
  }, {
    returnDocument: "after"
  });

  return res.json({ atendimento });
}
