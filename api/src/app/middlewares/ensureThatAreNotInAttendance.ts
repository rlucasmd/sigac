import { NextFunction, Request, Response } from "express";

import { Atendimento } from "../models/Atendimento";

export async function ensureThatAreNotInAttendance(req: Request, res: Response, next: NextFunction) {
  const { atendimentoId } = req.params;
  const atendimento = await Atendimento.findById(atendimentoId, "status_atendimento");
  if (!atendimento) {
    return res.status(400).json({ error: "Cannot register a service" });
  }
  if (["CIDADAO_NAO_AGUARDOU", "AGUARDANDO_ATENDIMENTO"].includes(atendimento.status_atendimento)) {
    return res.status(400).json({ error: "Cannot register a service" });
  }
  // console.log(atendimento);
  next();
}
