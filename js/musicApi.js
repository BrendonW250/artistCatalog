
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.refresh').addEventListener('click', refreshPage)

function getFetch(){
    const yourArtist = document.querySelector('#artist').value
    const artist = document.querySelector('#artist').value
    

    // artist album and year info api
    const url = "https://theaudiodb.com/api/v1/json/2/discography.php?s="+yourArtist

    // artist info api
    const url2 = "https://www.theaudiodb.com/api/v1/json/2/search.php?s="+artist

    // Retrieving all album's from inputted artist as well
    // as release years
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // looping through each element in the given array
            // from the api

            // 
            function listOfAlbums(){

                let crazy = []
                // let displayAlbums = document.getElementById('album-display')

                // 
                data.album.forEach(element => {
                    crazy.push((element.strAlbum + " " + element.intYearReleased))
                    // displayAlbums.innerHTML += "<br>" + crazy[element]

                    

                    // console.log(crazy)
    
                })
                let displayAlbums = document.getElementById('albums')
                for (let i=0; i<crazy.length; i++){
                    displayAlbums.innerHTML += "<br>" + crazy[i]
                    console.log(crazy[i])
                }

                // let albumInfo = crazy 
                // console.log(albumInfo)
            }
            listOfAlbums()

            

        })

        .catch(err => {
            console.log(`error${err}`)
        })

    fetch(url2)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // looping through the artists object given from API
            // Also appending artist name from api data to a new array
            // for queryselector to be displayed
            let newArr = []
            data.artists.forEach(element => {
                newArr.push(element.strArtist)

            })
            document.querySelector('.desired-artist').innerHTML = "Artist: " + newArr
            document.querySelector('img').src = data.artists[0].strArtistThumb
        
            document.getElementById('background-heading').innerHTML = "Career Overview: "
            document.querySelector('.artist-background').innerHTML = data.artists[0].strBiographyEN

            document.getElementById('catalog-heading').innerHTML = "Catalog: "
        })

        .catch(err => {
            console.log(`error${err}`)
        })
}

function refreshPage(){
    location.reload()
}

