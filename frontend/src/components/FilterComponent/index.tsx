import { Container, ModalFooter, Overlay } from "./styles";
import { Checkbox } from "../Checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";
import { ArrowCounterClockwise, X } from "phosphor-react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "../DatePicker";
import dayjs, { Dayjs } from "dayjs";

type IFilterComponent = {
  onHandleFilter: (data: any) => void;
  onCloseModal: () => void;
  isOpen: boolean;
}

const filterSchema = z.object({
  status: z.object({
    ATENDIMENTO_FINALIZADO: z.boolean(),
    EM_ATENDIMENTO: z.boolean(),
    NAO_AGUARDOU: z.boolean(),
    AGUARDANDO_ATENDIMENTO: z.boolean(),
  }),
  data_inicio: z.string(),
  data_fim: z.string()
});


export type IFilterSchema = z.infer<typeof filterSchema>;

export function FilterComponent({ onHandleFilter, isOpen, onCloseModal }: IFilterComponent) {
  const methods = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      status: {
        ATENDIMENTO_FINALIZADO: false,
        EM_ATENDIMENTO: true,
        NAO_AGUARDOU: false,
        AGUARDANDO_ATENDIMENTO: true,
      },
      data_inicio: dayjs().format("DD/MM/YYYY"),
      data_fim: dayjs().format("DD/MM/YYYY")
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = methods;

  function onHandleFails(data: unknown) {
    console.log(data);
  }
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Overlay onClick={onCloseModal} />
      <Container onClick={(e) => e.stopPropagation()}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onHandleFilter, onHandleFails)}>
            <h4>Status do atendimento</h4>
            <div className="filterGrid">

              <Checkbox
                {...register("status.AGUARDANDO_ATENDIMENTO")}
              >
                Aguardando atendimento
              </Checkbox>
              <Checkbox
                {...register("status.EM_ATENDIMENTO")}
              >
                Em atendimento
              </Checkbox>
              <Checkbox
                {...register("status.ATENDIMENTO_FINALIZADO", {})}
              >
                Atendimento finalizado
              </Checkbox>
              <Checkbox
                {...register("status.NAO_AGUARDOU")}
              >
                Não Aguardou
              </Checkbox>
            </div>
            <h4>Período</h4>
            <DatePicker />
            <ModalFooter>
              <Button variant="secondary" type="button" onClick={() => reset()}>
                <ArrowCounterClockwise weight="bold" size={16} />
                Voltar para o padrão
              </Button>
              <Button type="submit">
                Filtrar
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </Container>
    </>
  );
}
