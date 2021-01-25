export default function extractDataString(
  line: string
): { [key: string]: string } {
  const data = line.split("\\");
  const result: { [key: string]: string } = {};

  while (data.length > 0) {
    const [key, value] = data.splice(0, 2);
    result[key] = value;
  }

  return result;
}
