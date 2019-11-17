function getStarted(){
    $('.start').on('click', function(e){
        $('.main').hide();
        $('.top').hide();
        $('.getStarted').show();
    })

}

function pullCity(){
    $('.cityEnter').on('click', function(e){
        let city = $('input[class = city]').val();
        
        getAirportsByCity(city);
    })
}

function getAirportsByCity(city){
    const token = "_eyW-HBGj4Fm08atyrx_YRrq7QP6Qn8Ro2uVCxmrlPCMGw_A-7jATd9jUKmE0HFS_6Nbn4BUKaXA459VZNP3hjQ=="
    const options = {
        headers: new Headers({
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Vary": "Origin",

        })
    };

    fetch(`https://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/Us/USD/en-US/?query=${city}&apiKey=_eyW-HBGj4Fm08atyrx_YRrq7QP6Qn8Ro2uVCxmrlPCMGw_A-7jATd9jUKmE0HFS_6Nbn4BUKaXA459VZNP3hjQ==`,options)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(`${error}`));
}

function displayResults(responseJson){
    console.log(responseJson.Places.PlaceName);
}





function dom(){
    $(getStarted);
    $(pullCity);
}

$(dom);