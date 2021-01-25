export const targetMessages: {
  DEFAULT: string[];
  [key: string]: string[];
} = {
  MOD_GRAPPLE: ["was caught by"],
  MOD_GAUNTLET: ["was pummeled by"],
  MOD_MACHINEGUN: ["was machinegunned by"],
  MOD_SHOTGUN: ["was gunned down by"],
  MOD_GRENADE: ["ate", "'s grenade"],
  MOD_GRENADE_SPLASH: ["was shredded by", "'s shrapnel"],
  MOD_ROCKET: ["ate", "'s rocket"],
  MOD_ROCKET_SPLASH: ["almost dodged", "'s rocket"],
  MOD_PLASMA: ["was melted by", "'s plasmagun"],
  MOD_PLASMA_SPLASH: ["was melted by", "'s plasmagun"],
  MOD_RAILGUN: ["was railed by"],
  MOD_LIGHTNING: ["was electrocuted by"],
  MOD_BFG: ["was blasted by", "'s BFG"],
  MOD_BFG_SPLASH: ["was blasted by", "'s BFG"],
  MOD_NAIL: ["was nailed by"],
  MOD_CHAINGUN: ["got lead poisoning from", "'s Chaingun"],
  MOD_PROXIMITY_MINE: ["was too close to", "'s Prox Mine"],
  MOD_KAMIKAZE: ["falls to", "'s Kamikaze blast"],
  MOD_JUICED: ["was juiced by"],
  MOD_TELEFRAG: ["tried to invade", "'s personal space"],
  DEFAULT: ["was killed by"],
};
