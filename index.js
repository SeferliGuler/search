
    document.addEventListener("click", function(event) {
        ul = document.getElementById("list-group");
        let valueesas =document.getElementById('searchInputesas')
        if (event.target.id === "check" && ul.getElementsByClassName("list-group-item").length <= 3 && valueesas.value !=='') {
            let li = `
        <li class="list-group-item">
            <input type="text" id="searchInput" placeholder="${valueesas.value}">
            <span id="clearSearch" class="clear-icon-li">&times;</span>
        </li>
        `

        ul.insertAdjacentHTML("beforeend",li);

        valueesas.value=''
    
    }else{
        return;
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
    
    
    
    



    