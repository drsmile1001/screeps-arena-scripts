import { getObjectsByPrototype, findClosestByPath } from "game/utils";
import { Creep } from "game/prototypes";

import { Flag } from "arena/prototypes";

export function loop() {
  var creeps = getObjectsByPrototype(Creep).filter(i => i.my);
  var flags = getObjectsByPrototype(Flag);
  for (var creep of creeps) {
    var flag = creep.findClosestByPath(flags);
    if (flag) creep.moveTo(flag);
  }
}
