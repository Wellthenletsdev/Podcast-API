const getSinglePodcast = async (id) => {
    document.getElementById("cards").innerHTML=` ${id} `
    const response = await fetch (`https://podcast-api.netlify.app/id/${id}`
    ) 

    if (response.ok){ 
     const data = await response.json()
     document.getElementById("cards").innerHTML=`${data.title} ${data.season[0].images} ${data.genre}}`
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