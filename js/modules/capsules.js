import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllCapsules = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const informationCapsule = async (Capsule) =>{

    let firstTableInformation = document.querySelector("#country_rocket")
    firstTableInformation.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
            <div class="table__property">
        <div class="title">
            <h3>ID of the capsule</h3>
        </div>
        <div class="value">
            <p>${Capsule.id}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Status</h3>
        </div>
        <div class="value">
            <p>${Capsule.status}</p>
        </div>
        </div>
        <div class="table__property">
        <div class="title">
            <h3>Type</h3>
        </div>
        <div class="value">
            <p>${Capsule.type}</p>
        </div>
        </div>
        `
}

export const informationCapsule2 = async (Capsule) => {

    let secondTableInformation = document.querySelector("#sucess_rate_rocket")
    secondTableInformationTable.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>
    
}

