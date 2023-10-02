import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";

export async function deleteAtendimentoUseCase(req: Request, res: Response) {
  const { atendimentoId } = req.params;
  await Atendimento.findByIdAndDelete(atendimentoId);

  return res.sendStatus(204);
}
