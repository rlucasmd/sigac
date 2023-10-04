import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";
import { Cidadao } from "../../models/Cidadao";
import { Profissional } from "../../models/Profissional";
// import moment from "moment";

export async function addAtendimentoUseCase(req: Request, res: Response) {
  const { cidadaoId, responsavelId } = req.body;

  const cidadao = await Cidadao.findById(cidadaoId);
  const profissional = await Profissional.findById(responsavelId);
  console.log(cidadao, profissional);
  if (!cidadao) {
    return res.status(400).json({ message: "Usuário não encontrado!" });
  }

  if (!profissional) {
    return res.status(400).json({ message: "Profissional não encontrado!" });
  }

  const atendimento = await Atendimento.create({
    cidadao: cidadaoId,
    prontuario: cidadao.prontuario,
    responsavel: responsavelId
  });

  return res.json({ atendimento });
}
