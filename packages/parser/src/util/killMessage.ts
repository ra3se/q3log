import { Q3Mod, Q3Gender, Q3World } from "@q3log/types";

export default (
  attacker: string,
  attackerIndex: string,
  gender: string,
  mod: string,
  target: string,
  targetIndex: string
): string[] => {
  let message = null;
  let message2 = null;

  if (targetIndex === Q3World) {
    return []; // No one targets world, silly.
  }

  switch (mod) {
    case Q3Mod.SUICIDE:
      message = "suicides";
      break;
    case Q3Mod.FALLING:
      message = "cratered";
      break;
    case Q3Mod.CRUSH:
      message = "was squished";
      break;
    case Q3Mod.WATER:
      message = "sank like a rock";
      break;
    case Q3Mod.SLIME:
      message = "melted";
      break;
    case Q3Mod.LAVA:
      message = "does a back flip into the lava";
      break;
    case Q3Mod.TARGET_LASER:
      message = "saw the light";
      break;
    case Q3Mod.TRIGGER_HURT:
      message = "was in the wrong place";
      break;
    default:
      message = null;
      break;
  }

  if (attackerIndex === targetIndex) {
    switch (mod) {
      case Q3Mod.KAMIKAZE:
        message = "goes out with a bang";
        break;
      case Q3Mod.GRENADE_SPLASH:
        if (gender === Q3Gender.FEMALE) {
          message = "tripped on her own grenade";
        } else if (gender === Q3Gender.NEUTER) {
          message = "tripped on its own grenade";
        } else {
          message = "tripped on his own grenade";
        }

        break;
      case Q3Mod.ROCKET_SPLASH:
        if (gender === Q3Gender.FEMALE) {
          message = "blew herself up";
        } else if (gender === Q3Gender.NEUTER) {
          message = "blew itself up";
        } else {
          message = "blew himself up";
        }

        break;
      case Q3Mod.PLASMA_SPLASH:
        if (gender === Q3Gender.FEMALE) {
          message = "melted herself";
        } else if (gender === Q3Gender.NEUTER) {
          message = "melted itself";
        } else {
          message = "melted himself";
        }

        break;
      case Q3Mod.BFG_SPLASH:
        message = "should have used a smaller gun";
        break;
      case Q3Mod.PROXIMITY_MINE:
        if (gender === Q3Gender.FEMALE) {
          message = "found her prox mine";
        } else if (gender === Q3Gender.NEUTER) {
          message = "found its prox mine";
        } else {
          message = "found his prox mine";
        }

        break;
      default:
        if (gender === Q3Gender.FEMALE) {
          message = "killed herself";
        } else if (gender === Q3Gender.NEUTER) {
          message = "killed itself";
        } else {
          message = "killed himself";
        }

        break;
    }
  }

  if (message) {
    return [targetIndex, message];
  }

  if (attacker !== Q3World) {
    switch (mod) {
      case Q3Mod.GRAPPLE:
        message = "was caught by";
        break;
      case Q3Mod.GAUNTLET:
        message = "was pummeled by";
        break;
      case Q3Mod.MACHINEGUN:
        message = "was machinegunned by";
        break;
      case Q3Mod.SHOTGUN:
        message = "was gunned down by";
        break;
      case Q3Mod.GRENADE:
        message = "ate";
        message2 = "'s grenade";
        break;
      case Q3Mod.GRENADE_SPLASH:
        message = "was shredded by";
        message2 = "'s shrapnel";
        break;
      case Q3Mod.ROCKET:
        message = "ate";
        message2 = "'s rocket";
        break;
      case Q3Mod.ROCKET_SPLASH:
        message = "almost dodged";
        message2 = "'s rocket";
        break;
      case Q3Mod.PLASMA:
        message = "was melted by";
        message2 = "'s plasmagun";
        break;
      case Q3Mod.PLASMA_SPLASH:
        message = "was melted by";
        message2 = "'s plasmagun";
        break;
      case Q3Mod.RAILGUN:
        message = "was railed by";
        break;
      case Q3Mod.LIGHTNING:
        message = "was electrocuted by";
        break;
      case Q3Mod.BFG:
      case Q3Mod.BFG_SPLASH:
        message = "was blasted by";
        message2 = "'s BFG";
        break;
      case Q3Mod.NAIL:
        message = "was nailed by";
        break;
      case Q3Mod.CHAINGUN:
        message = "got lead poisoning from";
        message2 = "'s Chaingun";
        break;
      case Q3Mod.PROXIMITY_MINE:
        message = "was too close to";
        message2 = "'s Prox Mine";
        break;
      case Q3Mod.KAMIKAZE:
        message = "falls to";
        message2 = "'s Kamikaze blast";
        break;
      case Q3Mod.JUICED:
        message = "was juiced by";
        break;
      case Q3Mod.TELEFRAG:
        message = "tried to invade";
        message2 = "'s personal space";
        break;
      default:
        message = "was killed by";
        break;
    }
  }

  return message
    ? message2
      ? [target, message, attacker, message2]
      : [target, message, attacker]
    : [];
};
