alert('pop up')



fetch('https://podcast-api.netlify.app/shows').then((data)=> {
    // console.log(data);
    return data.json();

}) .then((completedata)=> {
    // console.log(completedata[1].title);
    // document.getElementById('root').innerHTML=completedata[1].title;
let data1=""; 
completedata.map((values)=>{ data1+=`<div class="card">
<h1 class="title"><button data-preview-button="${values.id}">${values.title}</button></h1>
<img src=${values.image} alt="img" class="images">
<p>${values.description}</p>
<p class="category">${values.genres}</p>
<p class="price">${values.seasons}</p>

</div>  `
} )
// listHtml.innerHTML= newHtml

// const getSinglePodcast = async (id) => {

//     const response = await fetch (`https://podcast-api.netlify.app/${id}`) 

//     if (response.ok){ document.getElementById.innerHTML='' }
//     const data = await response.json()
// }


const listHtml = document.querySelector('#list')


const getAllPodcasts = async () => {
    const response = await fetch(`https://podcast-api.netlify.app/shows`)
    if (!response.ok){
        document.getElementById("cards").innerHTML='error'
        return
    }
    const data =await response.json()

    // let seasonsList=''

    // for (const{title} of data.seasons){
    //     seasonsList.innerHTML=`
    //     <h2>${data.title}</h2>
        
    //     <li>
    //     ${seasonsList}
    //     </li>
    //     `
    // }

    // getElementById('cards').innerHTML=`
    // <h2>${value.title}</h2>

    // <ul>
    // ${value.seasons}
    // </ul>

    // `

    // let seasonsList='' 
    // for(const {title} of data.seasons){
    //     data1.innerHTML= `${seasonsList}
    //     <li>
    //     ${title}
    //     </li>
    //     `
       
    // }
console.log('working')

let seasonsList=''

for (let{title} of data.seasons){
    seasonsList.innerHTML=`
    <h2>${values.title}</h2>
    
    <li>
    ${seasonsList}
    </li>
    `
}

    document.getElementById("data").innerHTML= `
    <h2>${data.title}</h2>
    <ul> ${seasonsList} </ul>
    
    `
}

const getSinglePodcast = async (id) => {
    document.getElementById("cards").innerHTML=` ${id} `
    const response = await fetch (`https://podcast-api.netlify.app/id/${id}`) 

    if (response.ok){ 
     const data = await response.json()
     document.getElementById("cards").innerHTML=`<a href="index.html">Home</a> 
     <audio controls>
                <source src="./Scotts_Maphuma_ft_Stady_K_AmoSoul_Boss_Tenor_-_Glory_To_God_Fakazahiphop.com_.mp3" type="audio/mpeg">              
              </audio>
     ${data.title} ${data.seasons[0].image}`
    }
}

console.log('broken')
document.getElementById("cards").innerHTML=data1;

document.body.addEventListener('click',() =>{
    const {previewButton} = event.target.dataset
    //console.log(previewButton)
     if (!previewButton) return

    //document.getElementById("cards").innerHTML=` ${previewButton} `
    getSinglePodcast(previewButton)
})

console.log('here')




}).catch((error)=>{ console.log(error);})

// getAllPodcasts()

