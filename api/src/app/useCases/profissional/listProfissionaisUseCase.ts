import { Request, Response } from "express";
import { Profissional } from "../../models/Profissional";

export async function listProfissionaisUseCase(req: Request, res: Response) {
  const profissionais = await Profissional.find({});
  return res.json({ profissionais });
}
