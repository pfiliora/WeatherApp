export const renderWeather = (weatherData) => {

    let umbrellaCheck
    for (const check of weatherData.weather) {
        if (check.description === "rain") {
            umbrellaCheck = "Grab that umbrella"
        } else {
            umbrellaCheck = "Leave that umbrella"
        }
    }

    const container = document.querySelector('.js-weathercard');
    container.innerHTML = "";
    container.innerHTML = `<div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="./assets/${weatherData.weather["0"].description}.jpeg">
          <span class="card-title activator"> ${weatherData.name}</span>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Hi: ${weatherData.main.temp_max} Lo: ${weatherData.main.temp_min}<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>${umbrellaCheck}
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>`
}

