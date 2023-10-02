import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";
// import moment from "moment";

export async function addAtendimentoUseCase(req: Request, res: Response) {
  const { cidadaoId, prontuarioId, responsavelId } = req.body;

  const atendimento = await Atendimento.create({
    cidadao: cidadaoId,
    prontuario: prontuarioId,
    responsavel: responsavelId
  });

  return res.json({ atendimento });
}
