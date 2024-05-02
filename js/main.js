import { getAllRockets } from "./modules/rockets.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";

import {getAllRocketInformation} from "./modulesComponents/rocketInformation.js";


let information__2 = document.querySelector("#information__2");
let description__item = document.querySelector(".description__item");
let dataRockets = await getAllRockets();
let Totales = dataRockets.pop()

let [Rockets1, Rockets2, Rockets3, Rockets4] = dataRockets; 

console.log(dataRockets);
console.log(Totales);

information__2.append(...progressRocketWeight(Totales.kg_max, Rockets3))
information__2.append(...progressPayloadWeights(Totales.payload_weights, Rockets3))
information__2.append(...progressHeightRocket(Totales.height, Rockets3))
information__2.append(...progressDiameterRocket(Totales.diameter, Rockets3))
information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rockets3))
information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rockets3))


description__item.append(...getAllRocketInformation(Rockets3))
