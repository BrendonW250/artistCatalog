
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const yourArtist = document.querySelector('#artist').value
    const artist = document.querySelector('#artist').value
    let catalog = []

    const url = "https://theaudiodb.com/api/v1/json/2/discography.php?s="+yourArtist

    // artist info api
    const url2 = "https://www.theaudiodb.com/api/v1/json/2/search.php?s="+artist

    // Retrieving all album's from inputted artist as well
    // as release years
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let arr = []
            data.album.forEach(element => {
                arr.push(element.strAlbum + " " + element.intYearReleased + " ")
                

           
                document.querySelector('#album-display').innerHTML = arr
                
            });

            

            // data.album.forEach(element => {
            //     // console.log(element.strAlbum + " " + element.intYearReleased)
            //     document.querySelector('#album').innerHTML = element.strAlbum
            //     document.querySelector('#album2').innerHTML = element.strAlbum
                
             
            // });
            // let albumData = data.album
            // for (let i=0; i<albumData.length; i++){
            //     console.log(albumData[i])
            //     document.querySelector('#album').innerHTML = albumData[i].strAlbum
            //     document.querySelector('#album2').innerHTML = albumData[i].strAlbum
            // }
                


                // console.log(element.strAlbum)
                // console.log(element.intYearReleased)
                
                // document.querySelector('#album2').innerHTML = el2.strAlbum + " " + el2.intYearReleased
                // document.querySelector('#album3').innerHTML = el3.strAlbum + " " + el3.intYearReleased
                // document.querySelector('#album4').innerHTML = el4.strAlbum + " " + el4.intYearReleased
                // document.querySelector('#album5').innerHTML = el5.strAlbum + " " + el5.intYearReleased
            

            // potential # of albums
            // document.querySelector('#album0').innerHTML = data.album[0].strAlbum.intYearReleased
            // document.querySelector('#album1').innerHTML = data.album[1].strAlbum
            // document.querySelector('#album2').innerHTML = data.album[2].strAlbum
            // document.querySelector('#album3').innerHTML = data.album[3].strAlbum
            // document.querySelector('#album4').innerHTML = data.album[4].strAlbum
            // document.querySelector('#album5').innerHTML = data.album[5].strAlbum
            // document.querySelector('#album6').innerHTML = data.album[6].strAlbum
            // document.querySelector('#album7').innerHTML = data.album[7].strAlbum
            // document.querySelector('#album8').innerHTML = data.album[8].strAlbum
            // document.querySelector('#album9').innerHTML = data.album[9].strAlbum

            

            // for (let i=0; i<data.album; i++){
            //     console.log(data.album[i].strAlbum)
            //     document.querySelector('#album1').innerHTML = data.album[i].strAlbum
            // }


            

            // document.querySelector('#album1').innerHTML = "Albums: " + data
            

            // for (let i=0; i<data.album; i++){
            //     document.querySelector('#album1').innerHTML = "Albums: " + data.album[i].strAlbum
            //     document.querySelector('#album2').innerHTML = "Albums: " + data.album[i].strAlbum
            // }

            // displaying album contents
            // document.querySelector('#albums').innerHTML = "Albums: " + data.album[0].strAlbum

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
            document.querySelector('.desired-artist').innerHTML = newArr
            document.querySelector('img').src = data.artists.strArtistThumb
        })

        .catch(err => {
            console.log(`error${err}`)
        })
}

