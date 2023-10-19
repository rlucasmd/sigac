import { formatDuration, parse, intervalToDuration } from "date-fns";
import pt from "date-fns/locale/pt";

export function formatAge(data_nascimento: string) {
  // const units = ["years", "months", "days"];
  const duration = intervalToDuration({
    start: parse(data_nascimento, "dd-MM-yyyy", new Date()),
    end: new Date()
  });
  // console.log(duration);
  const durationFiltered = Object.entries(duration).filter(([_, value]) => value > 0 && !["hours", "minutes", "seconds"].includes(_));
  // console.log(durationFiltered);
  const filtered = durationFiltered.map(([key,]) => key).slice(0, 2);

  const idade = formatDuration(
    duration,
    { format: filtered, locale: pt, delimiter: " e " },
  );

  return idade;

}
