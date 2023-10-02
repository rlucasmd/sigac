import { Request, Response } from "express";
import { Cidadao } from "../../models/Cidadao";

export async function updateCidadaoUseCase(req: Request, res: Response) {
  const { cidadaoId } = req.params;
  const {
    nome,
    nome_mae,
    nome_pai,
    cpf,
    cns,
    data_nascimento,
    sexo,
    local_nascimento,
    endereco
  } = req.body;
  const cidadao = await Cidadao.findByIdAndUpdate(
    cidadaoId,
    {
      nome,
      nome_mae,
      nome_pai,
      cpf,
      cns,
      data_nascimento,
      sexo,
      local_nascimento,
      endereco,
      data_atualizado: new Date()
    },
    { returnDocument: "after" }
  );

  return res.json({ cidadao });
}
