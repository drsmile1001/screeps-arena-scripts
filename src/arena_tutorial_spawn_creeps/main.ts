import { getObjectsByPrototype } from "game/utils";
import { Creep, StructureSpawn } from "game/prototypes";
import { MOVE } from "game/constants";
import { Flag } from "arena/prototypes";

let creep1: Creep | undefined;
let creep2: Creep | undefined;

export function loop() {
  var mySpawn = getObjectsByPrototype(StructureSpawn)[0];
  var flags = getObjectsByPrototype(Flag);

  if (!creep1) {
    creep1 = mySpawn.spawnCreep([MOVE]).object;
  } else {
    creep1.moveTo(flags[0]);

    if (!creep2) {
      creep2 = mySpawn.spawnCreep([MOVE]).object;
    } else {
      creep2.moveTo(flags[1]);
    }
  }
}
