import { AutocompleteInput } from "../../components/AutocompleteInput";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiltrosContainer, ListaAtendimentoContainer, ListaAtendimentoContent, ListaAtendimentoHeader, ListagemAtendimentos } from "./styles";
import { listaAtendimentos } from "../../mocks/listaAtendimentos";

import { MagnifyingGlass, Funnel } from "phosphor-react";
import { AtendimentoItem } from "../../components/AtendimentoItem";

export function ListaAtendimentos() {
  return (
    <ListaAtendimentoContainer>
      <ListaAtendimentoHeader>
        <h1>Lista Atendimento</h1>

        <div>
          <AutocompleteInput placeholder="Pesquise pelo CPF, CNS ou Nome." />
          <Button>
            Adicionar Cidadão
          </Button>
        </div>
      </ListaAtendimentoHeader>
      <ListaAtendimentoContent>
        <FiltrosContainer>
          <div>
            <Input
              icon={<MagnifyingGlass size={24} />}
              placeholder="Pesquise por nome, CPF ou CNS"
            />
            <Button>
              <Funnel size={20} weight="bold" />
              Filtros
            </Button>
          </div>
          <div>
            <strong>Status do atendimento:</strong>
            <span>Aguardando Atendimento, Em atendimento</span>
            <span>|</span>
            <strong>Período:</strong>
            <span>Hoje</span>
          </div>
        </FiltrosContainer>
        <ListagemAtendimentos>
          {listaAtendimentos.map((atendimento) => (
            <AtendimentoItem key={atendimento._id} />
          ))}

        </ListagemAtendimentos>

      </ListaAtendimentoContent>
    </ListaAtendimentoContainer>
  );
}
