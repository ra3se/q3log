import { Q3LogEvent } from "@q3log/types";

interface Q3LogParser { (match: string[]): Q3LogEvent }

export default (regexp: RegExp, parser: Q3LogParser) => (
  line: string
): Q3LogEvent | null =>
  regexp.test(line) ? parser((line.match(regexp) || []).slice(1)) : null;
