import prettyPrint from "./prettyPrint";
import chalk from "chalk";

describe("colors", () => {
  test("black", () => expect(prettyPrint('^0black')).toBe(chalk.black("black")));
  test("red", () => expect(prettyPrint('^1red')).toBe(chalk.red("red")));
  test("green", () => expect(prettyPrint('^2green')).toBe(chalk.green("green")));
  test("yellow", () => expect(prettyPrint('^3yellow')).toBe(chalk.yellow("yellow")));
  test("blue", () => expect(prettyPrint('^4blue')).toBe(chalk.blue("blue")));
  test("cyan", () => expect(prettyPrint('^5cyan')).toBe(chalk.cyan("cyan")));
  test("magenta", () => expect(prettyPrint('^6magenta')).toBe(chalk.magenta("magenta")));
  test("white", () => expect(prettyPrint('^7white')).toBe(chalk.white("white")));
});
