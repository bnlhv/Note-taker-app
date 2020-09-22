let count = 0;

addNote = () => {
    
    //get the row and input text
    const row = document.getElementsByClassName("row")[1];
    const text = document.getElementById("input");

    //1 more element
    count++;

    //create elements for notes in main page
    let div = document.createElement("div");
    let parInfo = document.createElement("p");
    let btnX = document.createElement("button");
    let btnSeeMore = document.createElement("button");
    let title = document.createElement("p");

    let parDate = document.createElement("p");
    const d = new Date();
    parDate.innerHTML = d.toUTCString();
    parInfo.innerHTML = text.value;
    parInfo.id = "par"

    //buttons attr
    div.className = "col-md-3 mb-5 mr-2 border border-dark rounded new-item";
    btnX.id = "exit-btn";
    title.innerHTML = "Note" + count;
    title.className = "h6 font-weight-bold text-center";
    title.id = "note-title"
    parDate.className = "par-date";
    parInfo.className = "par-info"
    btnX.className = "close btn-sm";//bootstrap
    btnX.innerHTML = "X";
    btnSeeMore.id = "see-more-btn";
    btnSeeMore.className="btn btn-primary"//bootstrap
    btnSeeMore.innerHTML = "See More";
    //modal
    btnSeeMore.dataset.target = "#exampleModal";
    btnSeeMore.dataset.toggle = "modal";

    div.appendChild(btnX);
    div.appendChild(title);
    div.appendChild(parInfo);
    div.appendChild(btnSeeMore);
    div.appendChild(parDate);


    row.insertBefore(div, row.childNodes[0]);

    //hide deafault message
    document.getElementsByClassName("default-item")[0].style.visibility = "hidden";

    //onclick func to erase a note
    btnX.onclick = () => {
        div.parentElement.removeChild(div);
        count--;
        if (!count){
            document.getElementsByClassName("default-item")[0].style.visibility = "visible";
        }
    };



    btnSeeMore.onclick = () => {
        document.getElementsByClassName("modal-body")[0].innerHTML = text.value;
    }

    text.innerHTML = "";
}

