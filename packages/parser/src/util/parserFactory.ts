import { Q3LogEvent } from '@q3log/types'

type Q3LogParser = (match: string[]) => Q3LogEvent

const syslog = /<\d+>([A-Za-z]+)\s\d{1,2} \d{2}:\d{2}:\d{2}\s([\dA-Za-z]+)\[\d+]:\s/
const ignoreSyslog = (line: string): string => line.replace(syslog, '')

export default (regexp: RegExp, parser: Q3LogParser) => (
  line: string
): Q3LogEvent | undefined =>
  regexp.test(ignoreSyslog(line)) ? parser((ignoreSyslog(line).match(regexp) ?? []).slice(1)) : undefined
