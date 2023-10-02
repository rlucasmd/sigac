/* eslint-disable no-case-declarations */
import { Request, Response } from "express";

import { Cidadao } from "../../models/Cidadao";

export async function getCidadaoUseCase(req: Request, res: Response) {
  const search = req.body.search as string;
  if (!search)
    return res.sendStatus(400);
  const document = search.replace(/\D+/g, "");
  if (document.length === 0) {
    const cidadao = await Cidadao.find({ nome: { $regex: search, $options: "i" } });
    return res.json({ cidadao });
  }
  const cidadao = await Cidadao.find({
    $or: [{ cns: document }, { cpf: document }]
  });
  return res.json({ cidadao });
}
