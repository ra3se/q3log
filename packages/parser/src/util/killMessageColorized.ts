import killMessage from "./killMessage"

export default (
  attacker: string,
  attackerIndex: string,
  gender: string,
  mod: string,
  target: string,
  targetIndex: string
): string => {
  return killMessage(
    attacker,
    attackerIndex,
    gender,
    mod,
    target,
    targetIndex
  ).reduce(
    (result, current, index) =>
      (result += `${index > 0 && index < 3 ? " " : ""}^7${current}`),
    ""
  )
}
