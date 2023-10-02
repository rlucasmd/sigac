import { Request, Response } from "express";
import { Cidadao } from "../../models/Cidadao";
import { Prontuario } from "../../models/Prontuario";

export async function createCidadaoUseCase(req: Request, res: Response) {
  const { nome, nome_mae, nome_pai, cpf, cns, data_nascimento, sexo } = req.body;
  const cidadaoAlreadyExists = await Cidadao.findOne({
    $or: [{ cpf }, { cns }]
  });
  if (cidadaoAlreadyExists) {
    return res.status(400).json({
      error: "Não foi possível criar um novo cidadão, CNS ou CPF já em uso."
    });
  }
  const prontuario = await Prontuario.create({});
  const cidadao = await Cidadao.create({
    nome,
    nome_mae,
    nome_pai,
    cpf,
    cns,
    data_nascimento,
    sexo,
    prontuario
  });
  return res.json({ cidadao });
}
