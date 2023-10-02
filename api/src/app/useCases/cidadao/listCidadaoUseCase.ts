/* eslint-disable no-case-declarations */
import { Request, Response } from "express";

import { Cidadao } from "../../models/Cidadao";

export async function listCidadaoUseCase(req: Request, res: Response) {
  const cidadaos = await Cidadao.find({}, {
    endereco: 0,
    localidade_nascimento: 0,
    prontuario: 0,
  });

  return res.json({ cidadaos });

}
