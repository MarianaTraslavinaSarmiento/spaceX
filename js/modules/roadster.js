import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getRoadster = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/roadster")
    let data = await res.json();
    console.log(data);
    return data;
}
