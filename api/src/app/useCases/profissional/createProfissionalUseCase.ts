import { Request, Response } from "express";
import { Profissional } from "../../models/Profissional";
import bcrypt from "bcrypt";

export async function createProfissionalUseCase(req: Request, res: Response) {
  const { nome, cpf, cns, data_nascimento, sexo, senha, lotacao } = req.body;
  const profissionalAlreadyExists = await Profissional.findOne({
    $or: [{ cpf }, { cns }]
  });
  if (profissionalAlreadyExists) {
    return res.status(400).json({
      error: "Não foi possível criar um novo Profissional, CNS ou CPF já em uso."
    });
  }
  const profissional = await Profissional.create({
    nome,
    cpf,
    cns,
    senha: bcrypt.hashSync(senha, 8),
    data_nascimento,
    sexo,
    lotacao
  });
  // console.log(profissional);
  return res.json({ profissional: { nome, cpf, cns, data_nascimento: profissional.data_nascimento, sexo, lotacao } });
}
