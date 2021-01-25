export const genderMessages: {
  DEFAULT: string[];
  [key: string]: string[];
} = {
  MOD_KAMIKAZE: ["goes out with a bang"],
  MOD_GRENADE_SPLASH: [
    "tripped on his own grenade",
    "tripped on her own grenade",
    "tripped on its own grenade",
  ],
  MOD_ROCKET_SPLASH: ["blew himself up", "blew herself up", "blew itself up"],
  MOD_PLASMA_SPLASH: ["melted himself", "melted herself", "melted itself"],
  MOD_BFG_SPLASH: ["should have used a smaller gun"],
  MOD_PROXIMITY_MINE: [
    "found his prox mine",
    "found her prox mine",
    "found its prox mine",
  ],
  DEFAULT: ["killed himself", "killed herself", "killed itself"],
};
