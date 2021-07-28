const Mars_url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json'
let Planet_API = 'https://api.le-systeme-solaire.net/rest/bodies/'


 
function newUrl() {
   let data = document.getElementById('query').value;
   console.log(data);
   return Planet_API + data; 
}

  
async function getPlanetWeather() {
    
    const info_url = newUrl();
    const planet_response = await fetch(info_url);
    const planet_data = await planet_response.json();
    const planet_name = planet_data.englishName
    const TempK = planet_data.avgTemp;
    const TempC = TempK -273.15;
    const TempC_rounded = TempC.toFixed(2);
    const Mass = planet_data.mass.massValue;
    const MassRounded = Mass.toFixed(1)+"^"+planet_data.mass.massExponent;
    const orbit = planet_data.sideralOrbit;
    const orbitYears = (orbit/365).toFixed(2);

    document.getElementById('merc').innerHTML = planet_name;
    document.getElementById('title').innerHTML = planet_name;
    document.getElementById('temp').innerHTML = TempC_rounded;
    document.getElementById('clos_sun').innerHTML = 
    planet_data.perihelion;
    document.getElementById('far_sun').innerHTML =
    planet_data.aphelion;
    document.getElementById('mass').innerHTML = 
    MassRounded;
    document.getElementById('grav').innerHTML = 
    planet_data.gravity;
    document.getElementById('radi').innerHTML = 
    planet_data.meanRadius;
    document.getElementById('esc_vel').innerHTML = 
    planet_data.escape;
    const numMoons = planet_data.moons.length;
    document.getElementById('moons').innerHTML = 
    numMoons;
    document.getElementById('french').innerHTML = 
    planet_data.name;
    document.getElementById('dis_by').innerHTML = 
    planet_data.discoveredBy;
    document.getElementById('date').innerHTML = 
    planet_data.discoveryDate;
    document.getElementById('day').innerHTML = 
    planet_data.sideralRotation;
    document.getElementById('orbit').innerHTML = 
    orbitYears;
}

 

function changeTempToF() {
    let temp = document.getElementById('temp').innerText;
    convertedTemp = (temp*2) + 30;
        document.getElementById('temp').innerHTML = convertedTemp;
   
}

function changeTempToC () {
    let temp = document.getElementById('temp').innerText;
    convertedTemp = (temp-30) / 2;
        document.getElementById('temp').innerHTML = convertedTemp;
}





