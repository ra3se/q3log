import { Q3Module, Q3Gender, Q3World } from "@q3log/types"
import moduleMessages from "./killMessageData/moduleMessages"
import targetMessages from "./killMessageData/targetMessages"
import genderMessages from "./killMessageData/genderMessages"

interface killMessage {
  attacker: string,
  attackerIndex: string,
  gender: string,
  q3module: Q3Module,
  target: string,
  targetIndex: string
}

const genderMessage = (q3module: Q3Module, gender: string): string => {
  const parseGenderMessage = (maleMessage: string, femaleMessage: string, neuterMessage: string) => {
    switch (gender) {
      case Q3Gender.MALE:
        return maleMessage
      case Q3Gender.FEMALE:
        return femaleMessage
      default:
        return neuterMessage
    }
  }

  const m = genderMessages[q3module] || genderMessages.DEFAULT
  return parseGenderMessage(m[0 % m.length], m[1 % m.length], m[2 % m.length])
}

const addMessageColors = (parts: string[]) => parts.reduce(
  (result, current, index) =>
    result + `${index > 0 && index < 3 ? " " : ""}^7${current}`, "")

export default ({
  attacker,
  attackerIndex,
  gender,
  q3module,
  target,
  targetIndex
}: killMessage): string => {
  const finilizeMessage = (part1?: string, part2?: string): string => {
    if (part1) {
      return addMessageColors(part2
        ? [target, part1, attacker, part2]
        : [target, part1, attacker])
    } else {
      return ""
    }
  }

  if (attackerIndex === targetIndex) {
    return addMessageColors([target, genderMessage(q3module, gender)])
  }

  if (attacker !== Q3World) {
    return finilizeMessage(...targetMessages[q3module] || targetMessages.DEFAULT)
  }

  return addMessageColors([target, moduleMessages[q3module]])
}
