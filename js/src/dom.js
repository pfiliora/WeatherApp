export const renderWeather = (weatherData) => {

    let umbrellaCheck
    for (const check of weatherData.weather) {
        if (check.description === "rain" || "light rain" || "thunderstorm") {
            umbrellaCheck = "Grab that umbrella"
        } else {
            umbrellaCheck = "Leave that umbrella"
        }
    }

    // document.body.classList.add(background="./assets/${weatherData.weather["0"].icon}.jpeg")

    // const bodyDiv = document.querySelector('#app');
    document.body.style.background = `#f3f3f3 url('./assets/${weatherData.weather["0"].icon}.jpeg') no-repeat`;


    const container = document.querySelector('.js-weathercard');
    container.innerHTML = "";
    //     container.innerHTML = `
    // <div class="card-image waves-effect waves-block waves-light">
    //     <img class="activator" src="./assets/${weatherData.weather["0"].icon}.jpeg">
    //     <span class="card-title activator"> ${weatherData.name}</span>
    // </div>
    // <div class="card-content transparent">
    //     <span class="card-title activator grey-text text-darken-4">${umbrellaCheck}<i class="material-icons right">more_vert</i></span>
    //     <p><a href="#"></a></p>Hi: ${weatherData.main.temp_max} Lo: ${weatherData.main.temp_min}
    // </div>

    // <div class="card-reveal">
    //     <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    //     <p>Here is some more information about this product that is only revealed once clicked on.</p>
    // </div>`

    const navbar = document.querySelector('.js-navbar');
    navbar.innerHTML = "";
    navbar.innerHTML = `
<div class="nav-wrapper ">
    <a href="#" class="brand-logo center "><i class="material-icons Tiny">my_location</i> ${weatherData.name}</a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
</div>
`;


    const footer = document.querySelector('.js-footer');
    footer.innerHTML = "";
    footer.innerHTML = `
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h1 class="white-text">${weatherData.main.temp} &deg</h1>
                <p class="grey-text text-lighten-4"><sup>${weatherData.main.temp_max}&deg</sup><sub><i class="material-icons Tiny">import_export</i></sub>${weatherData.main.temp_min}&deg</p>
              </div>
              </div>
            </div>
          </div>
`;


}