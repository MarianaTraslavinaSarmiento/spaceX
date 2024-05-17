import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getAllLandpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLandpadsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`)
    let data = await res.json();
    return data;
}

export const informationLandpads = async (Landpads) =>{

    let centerLandpadLeft = document.querySelector("#country_rocket")
    centerLandpadLeft.innerHTML = /*html*/`

    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>Status</h3>
    </div>
    <div class="value">
        <p>${Landpads.status}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Type</h3>
    </div>
    <div class="value">
        <p>${Landpads.type}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Locality</h3>
    </div>
    <div class="value">
        <p>${Landpads.locality}</p>
    </div>
    </div>`

    let centerLandpadRight = document.querySelector("#sucess_rate_rocket")
    centerLandpadRight.innerHTML = /*html*/`
    <style>${styleOfEachProperty()}</style>

    <div class="table__property">
    <div class="title">
        <h3>Region</h3>
    </div>
    <div class="value">
        <p>${Landpads.region}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Latitude</h3>
    </div>
    <div class="value">
        <p>${Landpads.latitude}</p>
    </div>
    </div>
    <div class="table__property">
    <div class="title">
        <h3>Longitude</h3>
    </div>
    <div class="value">
        <p>${Landpads.longitude}</p>
    </div>
    </div>`


    let centerLandpad= document.querySelector("#section__image")
    centerLandpad.innerHTML = /*html*/`
    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--color--five);
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">ID</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table>
        <tr>
            <td style="font-weight: bold">${Landpads.id}</td>
        </tr>

    </table>`


    let rightLanpadDetails = document.querySelector("#information__2")
    rightLanpadDetails.innerHTML = /*html*/`

    <style>

    #section__image {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    #details__table {
        margin-right: 30px
    }

    </style>
    <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">DETAILS</h1>
    <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    <table id="details__table">
        <tr>
            <td style="font-weight: bold; color: #ffff; margin-right: 20px">${Landpads.details || " "}</td>

    </table>`

    // let leftLanpadLaunches = document.querySelector("#description__item")
    // leftLanpadLaunches.innerHTML = /*html*/`

    // <style>

    // #section__image {
    //     display:flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
        
    // }

    // #details__table {
    //     margin-right: 30px
    // }

    // </style>
    // <h1 style="color: var(--color--five); margin-inline: auto; margin-top: 20px">LAUNCHES</h1>
    // <hr style="color: var(--color--five); margin-block: 6px; width: 80%">
    // <table id="details__table">
    //     <tr>
    //         <td style="font-weight: bold; color: #ffff; margin-right: 20px">${Landpads.launches || " "}</td>

    // </table>`



}