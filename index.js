
    document.addEventListener("click", function(event) {
        let ul = document.getElementById("list-group");
        let input = document.getElementById('searchInput')
        let valueesas =document.getElementById('searchInputesas')
        if (event.target.id === "check" && ul.getElementsByClassName("list-group-item").length <= 3 && valueesas.value !=='') {
            let li = `
        <li class="list-group-item">
           <input type="text" id="searchInput" value="${valueesas.value}" readonly>
            <span id="clearSearch" class="clear-icon-li">&times;</span>
        </li>
        `

        ul.insertAdjacentHTML("beforeend",li);

        valueesas.value=''
        }
        
    else if (event.target.id === "alt") {
        let liArray = Array.from(ul.getElementsByClassName("list-group-item"));
        liArray.sort((a, b) => {
            let textA = a.querySelector("#searchInput").getAttribute("value")
            let textB = b.querySelector("#searchInput").getAttribute("value")
            if (textA < textB) return -1;
            if (textA > textB) return 1;
            
        });
        ul.innerHTML = ''; 
        liArray.forEach(li => ul.appendChild(li)); 
    }
    })


    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("clear-icon-li")) {
            event.target.closest(".list-group-item").remove();
        }
    });


   document.addEventListener('click', function(event) {
    let valueesas =document.getElementById('searchInputesas')
    if (event.target.classList.contains('valueDelete')) {
       valueesas.value = '';
    }
    }); 
    
    
    
    



    