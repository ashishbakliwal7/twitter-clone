import Vuex from "vuex";

import { account } from "./account";
import { alert } from "./alert";
import { tweet } from "./tweet";

export const store = new Vuex.Store({
  modules: {
    account,
    alert,
    tweet,
  },
});
