import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";
import { Cidadao } from "../../models/Cidadao";
// import moment from "moment";

export async function addAtendimentoUseCase(req: Request, res: Response) {
  const { cidadaoId, responsavelId } = req.body;

  const cidadao = await Cidadao.findById(cidadaoId);
  if (!cidadao) {
    return res.status(400).json({ message: "Usuário não encontrado!" });
  }

  const atendimento = await Atendimento.create({
    cidadao: cidadaoId,
    prontuario: cidadao.prontuario,
    responsavel: responsavelId
  });

  return res.json({ atendimento });
}
