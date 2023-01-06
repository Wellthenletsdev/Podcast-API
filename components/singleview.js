alert('pop up')

import './viewpage.js'
fetch('https://podcast-api.netlify.app/shows').then((data)=> {
    // console.log(data);
    return data.json();

}) .then((completedata)=> {
    // console.log(completedata[1].title);
    // document.getElementById('root').innerHTML=completedata[1].title;
let data1=""; 
completedata.map((values)=>{ data1+=`<div class="card">
<h1 class="title"><a href="components/podcastview.html" ="${values.id}">${values.title}</a></h1>
<img src=${values.image} alt="img" class="images">
<p>${values.description}</p>
<p class="category">${values.genres}</p>
<p class="price">${values.seasons}</p>
</div>  `
} )
// listHtml.innerHTML= newHtml

const getSinglePodcast = async (id) => {

    const response = await fetch (`https://podcast-api.netlify.app/id/${id}`) 

    if (response.ok){ document.getElementById.innerHTML='' }
    const data = await response.json()
}


const listHtml = document.querySelector('#list')


const getAllPodcasts = async (id) => {
    const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    if (!response.ok){
        document.getElementById("cards").innerHTML='error'
        return
    }
    const data =await response.json()

    let seasonsList=''

    for (const{title} of data.seasons){
        listHtml.innerHTML=`
        ${seasonsList}
        
        <li>
        ${title}
        </li>
        `
    }

    listHtml.innerHTML=`
    <h2>${value.title}</h2>

    <ul>
    ${seasonsList}
    </ul>

    `

    // let seasonsList='' 
    // for(const {title} of data.seasons){
    //     data1.innerHTML= `${seasonsList}
    //     <li>
    //     ${title}
    //     </li>
    //     `
       
    // }
console.log('working')

    document.getElementById("cards").innerHTML= `
    <h2>${title}</h2>

    <ul> ${seasonsList} </ul>
    
    `
}
console.log('broken')
document.getElementById("cards").innerHTML=data1;

document.body.addEventListener('click',() =>{
    const {previewButton} = event.target.dataset
    // console.log(previewButton)
     if (!previewButton) return

    document.getElementById("cards").innerHTML=`${previewButton} `
    getSinglePodcast(previewButton)
})




}).catch((error)=>{ console.log(error);})

// getAllPodcasts()