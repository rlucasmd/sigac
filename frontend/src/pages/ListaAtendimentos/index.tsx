import { AutocompleteInput } from "../../components/AutocompleteInput";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiltrosContainer, ListaAtendimentoContainer, ListaAtendimentoContent, ListaAtendimentoHeader, ListagemAtendimentos } from "./styles";
import { listaAtendimentos } from "../../mocks/listaAtendimentos";

import { MagnifyingGlass, Funnel } from "phosphor-react";
import { AtendimentoItem } from "../../components/AtendimentoItem";

// import * as Dialog from "@radix-ui/react-dialog";

import { FilterComponent, IFilterSchema } from "../../components/FilterComponent";
import { useState } from "react";

export function ListaAtendimentos() {

  const [isFilterModalOpen, setIsOpenFilterModal] = useState(false);

  function handleCloseFilterModal() {
    setIsOpenFilterModal(false);
  }
  function handleOpenFilterModal() {
    setIsOpenFilterModal(true);
  }

  function onHandleFilter(data: IFilterSchema) {
    console.log("Filtrando dados / Lista Atendimentos", data);
  }

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
          <div className="actions">
            <Input
              icon={<MagnifyingGlass size={24} />}
              placeholder="Pesquise por nome, CPF ou CNS"
            />

            <Button onClick={handleOpenFilterModal}>
              <Funnel size={20} weight="bold" />
              Filtros
            </Button>
            <FilterComponent
              onHandleFilter={onHandleFilter}
              isOpen={isFilterModalOpen}
              onCloseModal={handleCloseFilterModal}
            />
          </div>
          <div >
            <strong>Status do atendimento:</strong>
            <span>Aguardando Atendimento, Em atendimento</span>
            <span>|</span>
            <strong>Período:</strong>
            <span>Hoje</span>
          </div>
        </FiltrosContainer>
        <ListagemAtendimentos>
          <h4>Lista de Atendimentos</h4>
          {listaAtendimentos.map((atendimento) => (
            <AtendimentoItem
              key={atendimento._id}
              {...atendimento}
            />
          ))}

        </ListagemAtendimentos>

      </ListaAtendimentoContent>
    </ListaAtendimentoContainer>
  );
}
