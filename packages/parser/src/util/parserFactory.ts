import { Q3LogEvent } from '@q3log/types'

const syslog = /<\d+>([A-Za-z]+)\s\d{1,2} \d{2}:\d{2}:\d{2}\s([\dA-Za-z]+)\[\d+]:\s/
const ignoreSyslog = (line: string): string => line.replace(syslog, '')

export default (regexp: RegExp, parser: (match: string[]) => Q3LogEvent | undefined) => (
  line: string
): Q3LogEvent | undefined => {
  const match = ignoreSyslog(line).match(regexp)
  return match !== null ? parser(match.slice(1)) : undefined
}
