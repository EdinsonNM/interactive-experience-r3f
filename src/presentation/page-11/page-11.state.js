import { proxy } from "valtio";
import clamp from "lodash-es/clamp";

import pingSound from "./resources/ping.mp3";
const ping = new Audio(pingSound);

export const state = proxy({
  count: 0,
  api: {
    pong(velocity) {
      ping.currentTime = 0;
      ping.volume = clamp(velocity / 20, 0, 1);
      ping.play();
      if (velocity > 10) ++state.count;
    },
    reset: () => (state.count = 0),
  },
});
