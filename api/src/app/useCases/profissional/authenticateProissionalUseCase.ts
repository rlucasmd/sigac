import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Profissional } from "../../models/Profissional";

const secret = process.env.JWT_SECRET;

type IProfissional = {
  id: string,
  nome: string,
  lotacao: string;
}


export async function authenticateUseCase(req: Request, res: Response) {
  const { username, password } = req.body;

  const profissional = await Profissional.findOne({ cpf: username });

  if (!profissional) {
    return res.status(400).json({ error: "Username and password mismatch!" });
  }

  const { senha, nome, _id, lotacao } = profissional;

  const password_match = bcrypt.compareSync(password, senha);

  if (password_match) {
    const jwt_token = generateToken({ nome, id: _id.toString(), lotacao: lotacao ?? "" });
    return res.json({ jwt_token, profissional: { nome, lotacao, _id } });
  } else {
    return res.status(400).json({ error: "Username and password mismatch!" });
  }

}

function generateToken({ id, lotacao, nome }: IProfissional) {
  return jwt.sign({ id, nome, lotacao }, secret!, { expiresIn: "24h" });
}
