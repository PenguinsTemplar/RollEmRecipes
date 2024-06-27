
const weatherDiv = document.getElementById('weather');
window.onload = async function(){
let latitude;
let longitude;



if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(async position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log("latitude: ", latitude);
        console.log("longitude: ", longitude);

        const response = await axios({
            method: 'get',
            url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`,
            headers: {
                'x-rapidapi-key': 'db36d5382bmsh338ece551a28720p19d033jsn4122a45d323f',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        })
        const ptag = document.createElement('p');
        ptag.innerText = `${response.data.current.temp_f}F`;
        const imgTag = document.createElement('img');
        imgTag.src = response.data.current.condition.icon;
        weatherDiv.appendChild(ptag);
        weatherDiv.appendChild(imgTag);
        console.log("response: ", response.data.location);
    })



}else{
    const location = prompt("please enter location");
    console.log("location: ", location);
    const response = await axios({
        method: 'get',
        url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
        headers: {
            'x-rapidapi-key': 'db36d5382bmsh338ece551a28720p19d033jsn4122a45d323f',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    const ptag = document.createElement('p');
    ptag.innerText = `${response.data.current.temp_f}F`;
    const imgTag = document.createElement('img');
    imgTag.src = response.data.current.condition.icon;
    weatherDiv.appendChild(ptag);
    weatherDiv.appendChild(imgTag);
    console.log("response: ", response.data.location);
}



   
}