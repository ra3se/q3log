export default <T>(regexp: RegExp, parser: Function) => (
  line: string
): T | null =>
  regexp.test(line) ? parser((line.match(regexp) || []).slice(1)) : null;
