const syslog = /<\d+>([A-Za-z]+)\s\d{1,2} \d{2}:\d{2}:\d{2}\s([\dA-Za-z]+)\[\d+]:\s/
const ignoreSyslog = (line: string): string => line.replace(syslog, '')

export default <T>(regexp: RegExp, parser: (match: string[]) => T | undefined) => (
  line: string
): T | undefined => {
  const match = ignoreSyslog(line).match(regexp)
  return match !== null ? parser(match.slice(1)) : undefined
}
