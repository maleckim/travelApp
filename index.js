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

// function generateToken(){
//     fetch('https://partners.api.skyscanner.net/apiservices/token/v2/gettoken?apiKey=prtl6749387986743898559646983194')
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         throw new Error('unable to generate token');
//     })
//     .then(responseJson => x = responseJson )
//     .catch(error => alert(`${error}`))
// }

function getAirportsByCity(city){
    const token = "_eyW-HBGj4Fm08atyrx_YRrq7QP6Qn8Ro2uVCxmrlPCMGw_A-7jATd9jUKmE0HFS_6Nbn4BUKaXA459VZNP3hjQ=="
    const options = {
        headers: new Headers({
            'Access-Control-Allow-Origin': 'no-cors',
            "Accept": "application/json",
            "Vary": "Origin",

        })
    };

    fetch(`https://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/Us/USD/en-US/?query=${city}&apiKey=prtl6749387986743898559646983194`,{
        mode:'no-cors',
        accept: 'application/json'
    })
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
    console.log(responseJson);
}





function dom(){
    $(getStarted);
    $(pullCity);
    $(getAirportsByCity);
}

$(dom);