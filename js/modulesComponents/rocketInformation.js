/* <div class="rocket__image">
<!-- Imagen del cohete -->
<img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" alt="">
</div>

<!-- // Id del cohete -->
<div class="rocket__id">
<p id="id_rocket">ID: 5e9d0d95eda69974db09d1ed</p>
</div>

<!-- titulo del cohete -->
<h3 id="stages__title">Stages</h3>

<!-- Contenedor de los estados del cohete -->
<div class="stages__container">
<!-- contenedor de la etapa 1 -->
<div class="stage_1">
    <!-- icono de la etapa 1 -->
    <div class="stage__photo">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/one-7211787-5889119.png?f=webp" alt="">
    </div>
    <!-- informacion de la etapa 1 -->
    <div class="stage__information">
        <p id="1_reusableStage"><b>Reusable: </b>True</p>
        <p id="1_fuel"><b>Fuel tons: </b>2839474</p>
        <p id="1_engines"><b>Engines: </b>7</p>
    </div>
</div>

<!-- contenedor de la etapa 2 -->
<div class="stage_2">
    <!-- icono de la etapa 2 -->
    <div class="stage__photo">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/two-7211788-5889120.png" alt="">
    </div>
    <!-- informacion de la etapa 2 -->
    <div class="stage__information">
        <p id="2_reusableStage"><b>Reusable: </b>True</p>
        <p id="2_fuel"><b>Fuel tons: </b>2839474</p>
        <p id="2_engines"><b>Engines: </b>7</p>
    </div>
</div>

</div>

<!-- mas informacion del cohete -->

<h3 id="more__information">More information</h3>
<!-- contenedor de la informacion -->
<div class="more_information_rocket">
<!-- first flight -->
<div class="first_flight">
    <div class="icon">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3994327-3307661.png" alt="">
    </div>
    <div class="text">
        <h4 id="first_flight_title">First flight</h4>
        <p id="date_first_flight">2021-12-01</p>
    </div>
</div>

<!-- cost launch -->

<div class="cost_launch">
    <div class="icon">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-5374098-4492234.png?f=webp" alt="">
    </div>
    <div class="text">
        <h4 id="cost_launch_title">Cost of launch</h4>
        <p id="cost_dollars">700000</p>
    </div>

</div>

<!-- status -->

<div class="status">
    <div class="icon">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/switch-on-8820071-7139032.png?f=webp" alt="">
    </div>
    <div class="text">
        <h4 id="status_title">Status</h4>
        <p id="status_rocket">Active</p>
    </div>

</div>
</div> */


export const getAllRocketInformation= (rocket) => {

    //Div de la imagen del cohete
    let information = [];
    let rocketDivImage = document.createElement('div')
    rocketDivImage.classList.add('rocket__image')
    let rocketImage = document.createElement('img')
    rocketImage.src = rocket.flickr_images[1]
    
    rocketDivImage.append(rocketImage)


    //Id del cohete
    let rocketId = document.createElement('div')
    rocketId.classList.add('rocket__id')

    let idRocket = document.createElement('p')
    idRocket.id = 'id_rocket'
    idRocket.textContent = `ID: ${rocket.id}`
    rocketId.append(idRocket)

    //titulo del cohete

    let stagesTitle = document.createElement('h3')
    stagesTitle.id ='stages__title'
    stagesTitle.textContent = 'Stages'

    //Contenedor de los estados del cohete

    let stagesContainer = document.createElement('div')
    stagesContainer.classList.add('stages__container')

    let stage1 = document.createElement('div')
    stage1.classList.add('stage_1')

    let stage_photo = document.createElement('div')
    stage_photo.classList.add('stage__photo')
    let stage_photo_image = document.createElement('img')
    stage_photo_image.src = 'https://cdn3d.iconscout.com/3d/premium/thumb/one-7211787-5889119.png?f=webp'

    stagesContainer.append(stage1)
    stage1.append(stage_photo)
    stage_photo.append(stage_photo_image)


    //Informacion de la etapa 1

    let stage_information = document.createElement('div')
    stage_information.classList.add('stage__information')

    let reusableStage = document.createElement('p')
    reusableStage.id = '1_reusableStage'
    reusableStage.innerHTML = `<b> Reusable: </b> ${rocket.first_stage.reusable}`

    let fuel = document.createElement('p')
    fuel.id = '1_fuel'
    fuel.innerHTML = `<b>Fuel tons:</b> ${rocket.first_stage.fuel_amount_tons}`

    let engines = document.createElement('p')
    engines.id = '1_engines'
    engines.innerHTML = `<b>Engines: </b> ${rocket.first_stage.engines}`

    stagesContainer.append(stage_information)
    stage1.append(stage_information)
    stage_information.append(reusableStage)
    stage_information.append(fuel)
    stage_information.append(engines)


    //Etapa 2  

    let stage2 = document.createElement('div')
    stage2.classList.add('stage_2')

    let stage2_photo = document.createElement('div')
    stage2_photo.classList.add('stage__photo')

    let stage2_photo_image = document.createElement('img')
    stage2_photo_image.src = 'https://cdn3d.iconscout.com/3d/premium/thumb/two-7211788-5889120.png'

    stagesContainer.append(stage2)
    stage2.append(stage2_photo)
    stage2_photo.append(stage2_photo_image)

    //Informacion de la etapa 2

    let stage_information2 = document.createElement('div')
    stage_information2.classList.add('stage_information')

    let reusableStage2 = document.createElement('p')
    reusableStage2.id = '2_reusableStage'
    reusableStage2.innerHTML = `<b> Reusable: </b> ${rocket.second_stage.reusable}`

    let fuel2 = document.createElement('div')
    fuel2.classList.add('2_fuel')
    fuel2.innerHTML = `<b> Fuel tons: ${rocket.second_stage.fuel_amount_tons}</b>`


    let engines2 = document.createElement('p')
    engines2.id = '2_engines'
    engines2.innerHTML = `<b>Engines: </b> ${rocket.second_stage.engines}`

    stagesContainer.append(stage_information2)
    stage2.append(stage_information2)
    stage_information2.append(reusableStage2)
    stage_information2.append(fuel2)
    stage_information2.append(engines2)


    let moreInformationTitle = document.createElement('h3')
    moreInformationTitle.id ='more_information'
    moreInformationTitle.textContent = 'More Information'

    //Contenedor de la informacion

    let moreInformationRocket = documento.createElement('div')
    moreInformationRocket.classList.add('more_information_rocket')



    information.push(rocketDivImage)
    information.push(rocketId)
    information.push(stagesTitle)
    information.push(stagesContainer)
    information.push(moreInformationTitle)
    information.push(moreInformationRocket)

    
    return information

}




// <!-- mas informacion del cohete -->

// <h3 id="more__information">More information</h3>
// <!-- contenedor de la informacion -->
// <div class="more_information_rocket">
// <!-- first flight -->
// <div class="first_flight">
//     <div class="icon">
//         <img src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3994327-3307661.png" alt="">
//     </div>
//     <div class="text">
//         <h4 id="first_flight_title">First flight</h4>
//         <p id="date_first_flight">2021-12-01</p>
//     </div>
// </div>

// <!-- cost launch -->

// <div class="cost_launch">
//     <div class="icon">
//         <img src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-5374098-4492234.png?f=webp" alt="">
//     </div>
//     <div class="text">
//         <h4 id="cost_launch_title">Cost of launch</h4>
//         <p id="cost_dollars">700000</p>
//     </div>

// </div>

// <!-- status -->

// <div class="status">
//     <div class="icon">
//         <img src="https://cdn3d.iconscout.com/3d/premium/thumb/switch-on-8820071-7139032.png?f=webp" alt="">
//     </div>
//     <div class="text">
//         <h4 id="status_title">Status</h4>
//         <p id="status_rocket">Active</p>
//     </div>

// </div>
// </div> */