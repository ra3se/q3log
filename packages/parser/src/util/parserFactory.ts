import { Q3LogEvent } from "@q3log/types";

export default <T>(name: string, regexp: RegExp, parser: Function) => (
  line: string
): Q3LogEvent<T> | null =>
  regexp.test(line)
    ? { event: name, data: parser((line.match(regexp) || []).slice(1)) }
    : null;
