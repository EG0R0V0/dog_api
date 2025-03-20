//ПРОДВИНУТЫЙ JS

// fetch("https://dog.ceo/api/breeds/image/random") //запрос методом fetch на рандомных собак
//     .then(responce => responce.json())
//     .then(res => console.log(res.message));


// fetch("https://dog.ceo/api/breeds/image/random") //делает fetch запрос и выдает рандомную собачульку
//     .then(responce => responce.json())
//     .then((res) => {
//         if (res.status !== 'success'){
//             return;
//         } 
//         const imgSrc = res.message;
//         console.log (res.message);
//         document.querySelector('.js-img').innerHTML=`
//             <img
//             src= '${imgSrc}'>
//         `;
//     });
const loadDogImg = document.querySelector('.load-dog-img');
const resultElement = document.querySelector('.result-img');

loadDogImg.addEventListener('submit', (event) => {
    event.preventDefault()

    fetch("https://dog.ceo/api/breeds/image/random") 
        .then(response => {
            console.log('response:', response)
            return response.json()
        })
        .then((res) => {
            if (res.status !== 'success'){
                return;
            } 
            const imgSrc = res.message;
            console.log (res.message);
            document.querySelector('.result-img').innerHTML=`
                <img
                src= '${imgSrc}'>
            `;
        });
});

