import { Q3Module, Q3Gender, Q3World } from "@q3log/types"

interface killMessage {
  attacker: string,
  attackerIndex: string,
  gender: string,
  q3module: string,
  target: string,
  targetIndex: string
}

const messageFromModule = (q3module: string): string | undefined => {
  switch (q3module) {
    case Q3Module.SUICIDE:
      return "suicides"
    case Q3Module.FALLING:
      return "cratered"
    case Q3Module.CRUSH:
      return "was squished"
    case Q3Module.WATER:
      return "sank like a rock"
    case Q3Module.SLIME:
      return "melted"
    case Q3Module.LAVA:
      return "does a back flip into the lava"
    case Q3Module.TARGET_LASER:
      return "saw the light"
    case Q3Module.TRIGGER_HURT:
      return "was in the wrong place"
  }
  return
}

const messageOnWorld = (q3module: string): string[] => {
  switch (q3module) {
    case Q3Module.GRAPPLE:
      return ["was caught by"]
    case Q3Module.GAUNTLET:
      return ["was pummeled by"]
    case Q3Module.MACHINEGUN:
      return ["was machinegunned by"]
    case Q3Module.SHOTGUN:
      return ["was gunned down by"]
    case Q3Module.GRENADE:
      return ["ate", "'s grenade"]
    case Q3Module.GRENADE_SPLASH:
      return ["was shredded by", "'s shrapnel"]
    case Q3Module.ROCKET:
      return ["ate", "'s rocket"]
    case Q3Module.ROCKET_SPLASH:
      return ["almost dodged", "'s rocket"]
    case Q3Module.PLASMA:
      return ["was melted by", "'s plasmagun"]
    case Q3Module.PLASMA_SPLASH:
      return ["was melted by", "'s plasmagun"]
    case Q3Module.RAILGUN:
      return ["was railed by"]
    case Q3Module.LIGHTNING:
      return ["was electrocuted by"]
    case Q3Module.BFG:
    case Q3Module.BFG_SPLASH:
      return ["was blasted by", "'s BFG"]
    case Q3Module.NAIL:
      return ["was nailed by"]
    case Q3Module.CHAINGUN:
      return ["got lead poisoning from", "'s Chaingun"]
    case Q3Module.PROXIMITY_MINE:
      return ["was too close to", "'s Prox Mine"]
    case Q3Module.KAMIKAZE:
      return ["falls to", "'s Kamikaze blast"]
    case Q3Module.JUICED:
      return ["was juiced by"]
    case Q3Module.TELEFRAG:
      return ["tried to invade", "'s personal space"]
    default:
      return ["was killed by"]
  }
}

const messageOnTarget = (q3module: string, gender: string): string => {
  const genderMessage = (maleMessage: string, femaleMessage: string, neuterMessage: string) => {
    switch (gender) {
      case Q3Gender.MALE:
        return maleMessage
      case Q3Gender.FEMALE:
        return femaleMessage
      default:
        return neuterMessage
    }
  }

  switch (q3module) {
    case Q3Module.KAMIKAZE:
      return "goes out with a bang"
    case Q3Module.GRENADE_SPLASH:
      return genderMessage("tripped on his own grenade", "tripped on her own grenade", "tripped on its own grenade")
    case Q3Module.ROCKET_SPLASH:
      return genderMessage("blew himself up", "blew herself up", "blew itself up")
    case Q3Module.PLASMA_SPLASH:
      return genderMessage("melted himself", "melted herself", "melted itself")
    case Q3Module.BFG_SPLASH:
      return "should have used a smaller gun"
    case Q3Module.PROXIMITY_MINE:
      return genderMessage("found his prox mine", "found her prox mine", "found its prox mine")
    default:
      return genderMessage("killed himself", "killed herself", "killed itself")
  }
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
  let messageParts: string[] = new Array(2)
  const assignMessage = (part1?: string, part2?: string): void => {
    messageParts = [
      part1 ? part1 : messageParts[0],
      part2 ? part2 : messageParts[1]
    ]
  }

  const finilizeMessage = (part1?: string, part2?: string): string => {
    if (part1) {
      return addMessageColors(part2
        ? [target, part1, attacker, part2]
        : [target, part1, attacker])
    } else {
      return ""
    }
  }

  assignMessage(messageFromModule(q3module))

  if (attackerIndex === targetIndex) {
    assignMessage(messageOnTarget(q3module, gender))
  }

  if (attacker !== Q3World) {
    assignMessage(...messageOnWorld(q3module))
  }

  return finilizeMessage(...messageParts)
}
