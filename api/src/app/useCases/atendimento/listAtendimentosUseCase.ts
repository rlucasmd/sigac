import { Request, Response } from "express";

import { Atendimento } from "../../models/Atendimento";
import { endOfDay, startOfDay } from "date-fns";

export async function listAtendimentosUseCase(req: Request, res: Response) {
  const { de, ate, status } = req.body;
  const data_inicio = new Date(`${de}T03:00:00.000Z`);
  const data_fim = new Date(`${ate}T03:00:00.000Z`);

  const data_inicio_do_dia = startOfDay(data_inicio);
  const data_fim_do_dia = endOfDay(data_fim);


  const atendimentos = await Atendimento.find({
    data_atendimento: { $gte: data_inicio_do_dia, $lte: data_fim_do_dia },
    status_atendimento: { $in: status }
  }, "status_atendimento").populate("cidadao", "nome data_nascimento").populate("responsavel", "nome");

  return res.json({ atendimentos });
}
