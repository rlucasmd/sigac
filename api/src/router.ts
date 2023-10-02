import { Router } from "express";
import { getCidadaoUseCase } from "./app/useCases/cidadao/getCidadaoUseCase";
import { createCidadaoUseCase } from "./app/useCases/cidadao/createCidadaoUseCase";
import { listCidadaoUseCase } from "./app/useCases/cidadao/listCidadaoUseCase";
import { updateCidadaoUseCase } from "./app/useCases/cidadao/updateCidadaoUseCase";
import { createProfissionalUseCase } from "./app/useCases/profissional/createProfissionalUseCase";
import { listProfissionaisUseCase } from "./app/useCases/profissional/listProfissionaisUseCase";
import { addAtendimentoUseCase } from "./app/useCases/atendimento/addAtendimentoUseCase";
import { listAtendimentosUseCase } from "./app/useCases/atendimento/listAtendimentosUseCase";
import { deleteAtendimentoUseCase } from "./app/useCases/atendimento/deleteAtendimentoUseCase";
import { setCidadaoNaoAguardouUseCase } from "./app/useCases/atendimento/setCidadaoNaoAguardouUseCase";
import { registerAtendimentoUseCase } from "./app/useCases/atendimento/registerAtendimentoUseCase";
import { ensureThatAreNotInAttendance } from "./app/middlewares/ensureThatAreNotInAttendance";
import { setEmAtendimentoUseCase } from "./app/useCases/atendimento/setEmAtendimentoUseCase";
import { authenticateUseCase } from "./app/useCases/profissional/authenticateProissionalUseCase";

export const routes = Router();

routes.get("/cidadao/list", listCidadaoUseCase);
routes.get("/cidadao", getCidadaoUseCase);
routes.post("/cidadao", createCidadaoUseCase);
routes.put("/cidadao/:cidadaoId", updateCidadaoUseCase);

routes.post("/profissional", createProfissionalUseCase);
routes.get("/profissional", listProfissionaisUseCase);

routes.post("/atendimentos/adicionar", addAtendimentoUseCase);
routes.get("/atendimentos", listAtendimentosUseCase);
routes.delete("/atendimentos/:atendimentoId", deleteAtendimentoUseCase);
routes.patch("/atendimentos/:atendimentoId/nao_aguardou", setCidadaoNaoAguardouUseCase);
routes.patch("/atendimentos/:atendimentoId", setEmAtendimentoUseCase);
routes.put("/atendimentos/:atendimentoId/registrar", ensureThatAreNotInAttendance, registerAtendimentoUseCase);

routes.post("/authenticate", authenticateUseCase);

