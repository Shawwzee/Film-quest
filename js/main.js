// Declaring variables
const submitBtn = document.getElementById("submit");
const movIMG = document.getElementById("movPoster");


// Function to get search query
function searchMov() {
    var movTxt = document.getElementById("movieTxt").value;

    movTxtReplaced = movTxt.split(' ').join('+');
    fetch(`http://www.omdbapi.com/?t=${movTxtReplaced}&apikey=bc434919`)
        .then(response => response.json())
        .then(data => {
            dataObj = data;
            console.log(dataObj);

            document.getElementById("moviebox").style.opacity = "1";
            document.getElementById("infoFrom").style.opacity = "1";
            document.getElementById("title").innerText = dataObj.Title;
            document.getElementById("movPoster").src = dataObj.Poster;
            document.getElementById("runtime").innerHTML = dataObj.Runtime;
            document.getElementById("plot").innerHTML = "<b>Plot:</b><br>" + dataObj.Plot;
            document.getElementById("rating").innerHTML = "<b>Age Rating:</b> " + dataObj.Rated;
            document.getElementById("actors").innerHTML = "<b>Actors:</b> " + dataObj.Actors;
            document.getElementById("released").innerHTML = "<b>Released:</b> " + dataObj.Released;
            document.getElementById("genre").innerHTML = "<b>Genre:</b> " + dataObj.Genre;
            document.getElementById("director").innerHTML = "<b>Director:</b> " + dataObj.Director;
            document.getElementById("rotTomScore").innerText = dataObj.Ratings[1].Value;
            document.getElementById("metaScore").innerText = dataObj.Ratings[2].Value;
            document.getElementById("imdbScore").innerText = dataObj.Ratings[0].Value;
            document.getElementById("writer").innerHTML = "<b>Writer:</b> " + dataObj.Writer;
        });
}

// Event handler for user pressing submit button
submitBtn.onclick = searchMov;

// Function to enlarge movie poster
function enlargeIMG() {
    // Chnages style to make image larger
    document.getElementById("movPoster").style.position = "fixed";
    document.getElementById("movPoster").style.top = "50%";
    document.getElementById("movPoster").style.left = "50%";
    document.getElementById("movPoster").style.marginTop = "-337.5px";
    document.getElementById("movPoster").style.marginLeft = "-225px";
    document.getElementById("movPoster").style.backgroundColor = "black";
    document.getElementById("movPoster").style.width = "450px";
    document.getElementById("movPoster").style.height = "675px";



    // Declares variable for check
    icon = document.getElementById("crossIcon");

    // If image is pressed, checks that it hasn't been clicked already
    if (typeof (icon) !== undefined && icon != null) {
        return
    } else {
        let crossIcon = document.createElement('div')
        crossIcon.innerHTML = "<i></i>";
        crossIcon.setAttribute("id", "crossIcon");
        crossIcon.setAttribute("class", "fas fa-times");

        document.body.appendChild(crossIcon);

        let bg = document.createElement('div')
        bg.setAttribute("id", "background");
        document.body.appendChild(bg);

    }

    iconIMG = document.getElementById("crossIcon")
    back = document.getElementById("background")

    // Event handler for user clicking on X
    iconIMG.onclick = smallerIMG;

    // Function to reduce size of movie poster
    function smallerIMG() {
        document.getElementById("movPoster").style.position = null;
        document.getElementById("movPoster").style.top = null;
        document.getElementById("movPoster").style.left = null;
        document.getElementById("movPoster").style.marginTop = null;
        document.getElementById("movPoster").style.marginLeft = null;
        document.getElementById("movPoster").style.backgroundColor = null;
        document.getElementById("movPoster").style.width = null;
        document.getElementById("movPoster").style.height = null;

        iconIMG.remove();
        back.remove();
    }

}

// Event handler for user clicking on Movie Poster
movIMG.onclick = enlargeIMG;

