
axios.get("https://leonardoapi.onrender.com/music")
.then((res) => {
     res.data.map((song) => {
          let ol = document.createElement('li')
          ol.innerHTML = `${song.author} - ${song.title}`

          document.querySelector("#tracklist").appendChild(ol)

/*evento escuchando*/
     
          ol.addEventListener('click' , () => {
               console.log(song.title)       

               document.querySelector("#songtitle").innerHTML = song.title

               document.querySelector("#author").innerHTML = song.author

               document.querySelector("#songaudio").setAttribute ('src' , song.path.audio)

               document.querySelector("#imageaudio").setAttribute ('src' , song.path.front)
          })

     })
})

