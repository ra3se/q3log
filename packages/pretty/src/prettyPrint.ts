import chalk from "chalk";

const colorMap = [
  chalk.black, // 0: Black.
  chalk.red, // 1: Red.
  chalk.green, // 2: Green.
  chalk.yellow, // 3: Yellow.
  chalk.blue, // 4: Blue.
  chalk.cyan, // 5: Cyan.
  chalk.magenta, // 6: Pink.
  chalk.white, // 7: White.
];

export default (...args: string[]): string => {
  const colorMatch = /(\^\d)/g;
  const line = args.reduce((previus, current) => {
    return previus + (current ?? "");
  }, "");

  return line
    .split(colorMatch)
    .reverse()
    .reduce((result, part) => {
      if (part.match(colorMatch) !== null) {
        const colorIndex =
          Number.parseInt(part.replace("^", ""), 10) % colorMap.length;
        const color = colorMap[colorIndex];
        return color(result);
      }

      return part + result;
    }, "");
};
