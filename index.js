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
//     .then(responseJson => return(responseJson) )
//     .catch(error => alert(`${error}`))
// }

function getAirportsByCity(city){
    // let token = generateToken();
    // token = encodeURL(token);
    

    fetch(`https://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/Us/USD/en-US/?query=${city}&apiKey=prtl6749387986743898559646983194`,{
        mode:'no-cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Accept-Encoding':'gzip,deflate', 
            'Cache-Control': 'no-cache',
            'Host':'partners.api.skyscanner.net', 
        })
        
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('nope'))
}

function displayResults(responseJson){
    
    console.log(responseJson);
}





function dom(){
    $(getStarted);
    $(pullCity);
    
}

$(dom);