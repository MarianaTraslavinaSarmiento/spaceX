import { styleOfEachProperty } from "../modulesComponents/styleProperties.js";

export const getCompany = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();
    console.log(data);
    return data;
}

// export const informationCompany = async (data) =>{

//     let linksCompany = document.querySelector("#description__item")
//     linksCompany.innerHTML = /*html*/`

//     <style>

//     .item__container{
//         background-color: #1d1f38;
//         color: #ffff;
//         border-left: 5px solid #55588a;
//         width: 100%;
//         border-radius: 0px 10px 10px 0px ;
//         display: flex;
//         align-items: center;
//         margin-bottom: 15px;

//     }


//     .item__container p{

//         padding: 15px 15px 15px 0px;
//     }

//     .item__container i{
//         font-size: 25px;
//         padding-inline: 5px
//     }

//     .item__container a{
//         color: var(--color--five);
        
//     }

//     .property__box{
//         width: 90%
//     }

//     #infoCompany{
//         margin-bottom: 20px
//     }

//     </style>

//     <h2 id="infoCompany">Links</h2>

//     <div class="property__box">

//         <div class="item__container">
//             <i class="bi bi-youtube"></i>
//             <p><b>Website: </b> ${data.links.website} </p>
//         </div>

//         <div class="item__container">
//             <i class="bi bi-fire"></i>
//             <p><b>Twitter: </b> ${data.links.twitter} </p>
//         </div>
        
//         <div class="item__container">
//             <i class="bi bi-check2-square"></i>
//             <p><b>Elon twitter: </b> ${data.links.elon_twitter} </p>
//         </div>

//     </div>
//     `
// }

