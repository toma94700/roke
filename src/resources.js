import * as ex from "excalibur";

import idleMan0 from "./assets/L/obj_Idle000.png";
import idleMan1 from "./assets/L/obj_Idle001.png";
import idleMan2 from "./assets/L/obj_Idle002.png";
import idleMan3 from "./assets/L/obj_Idle003.png";


export const resources = [idleMan0, idleMan1, idleMan2, idleMan3].map(
    (resource) => new ex.ImageSource(resource)
);
