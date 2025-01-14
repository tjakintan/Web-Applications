var right = document.getElementById("rightContent")

var Bio_Information = document.getElementById("Bio_Information")
Bio_Information.addEventListener("click", function DisplayBioInformation(event){
    event.preventDefault()

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Bio.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) { 
            if (xhr.status === 200) { 
                right.innerHTML = xhr.responseText;
            } else {
                console.error("Failed to fetch new content: " + xhr.status);
            }
        }
    };
    xhr.send();
});

var Portfolio_Information = document.getElementById("Portfolio_Information")
Portfolio_Information.addEventListener("click", function DisplayPortfolioInformation(event){
    event.preventDefault()

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Portfolio.html", true); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) { 
            if (xhr.status === 200) { 
                right.innerHTML = xhr.responseText;
            } else {
                console.error("Failed to fetch new content: " + xhr.status);
            }
        }
    };
    xhr.send();
});

var Education_Information = document.getElementById("Education_Information")
Education_Information.addEventListener("click", function DisplayEducationInformation(event){
    event.preventDefault()

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Education.html", true); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) { 
            if (xhr.status === 200) { 
                right.innerHTML = xhr.responseText;
            } else {
                console.error("Failed to fetch new content: " + xhr.status);
            }
        }
    };
    xhr.send();
});





