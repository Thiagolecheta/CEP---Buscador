
    let answer = document.querySelector('.answer')

async function searchCEP(){
    let cep = document.querySelector(".inputCEP").value


    const results = await fetch (`https://cdn.apicep.com/file/apicep/${cep}.json`)

    let json = await results.json()


    if(json.status === 200){

        answer.style.display = 'block'
        document.querySelector('.address').innerHTML = 'Endereço: ' + json.address;
        document.querySelector('.district').innerHTML = 'Bairro: ' + json.district;
        document.querySelector('.city').innerHTML = 'Cidade: ' + json.city;
        document.querySelector('.state').innerHTML = 'Estado: ' + json.state;
        document.querySelector('.code').innerHTML = 'Caixa Postal: ' + json.code;
    } 

    
}


function clean(){
    answer.style.display = 'none'
}

