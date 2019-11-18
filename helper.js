function userCredentials(){
    $('.create').on('click',function(e){
        event.preventDefault();
        let userName = $('input[class = "usr"]').val();
        let passWord = $('input[class = "pass"]').val();
        createAccount(userName, passWord);
        $('.usr').hide();
        $('.pass').hide();
        $('.local').show();
        
    });
};


function createAccount(userName, passWord){
    localStorage.setItem('name',`${userName}`,'password',`${passWord}`);   
}

function addPlace(){
    $('.create').on('click',function(e){
        event.preventDefault();
        let local = $('input[class = "local"]').val();
        localStorage.setItem('location',`${local}`);
        console.log(localStorage);
    });
}






function dom(){
    $(userCredentials);
    $(addPlace);
}

$(dom);

http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/Us/USD/en-US/?query=chicago&apiKey=prtl6749387986743898559646983194

https://skyscanner.github.io/slate/#hotels

function getAirportsByCity(city){
    fetch(`http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/Us/USD/en-US/?query=${city}&apiKey=prtl6749387986743898559646983194`)
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