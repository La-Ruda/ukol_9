
///// PRVNI UKOL AUTO


let movedLeft = false;
let movedRight = false;

document.addEventListener("keydown", (event) => {

    const auto = document.getElementById("auto");

    const instrukce = document.getElementById("instrukce");

    function vychozi() {
        auto.style.margin = "0";
        instrukce.innerHTML = "<p>Jsi na středu. Zajezdi si šipkou doleva nebo doprava</p>"
    }    

    const image = document.getElementById("img");

    if (event.code === 	"ArrowLeft") {

        if (!movedLeft) { 
            vychozi()
            movedLeft = true;
        } else if (movedRight) {
            vychozi()
            movedRight = false;
        } else {
            auto.style.margin = "0 500px 0 0";
            instrukce.innerHTML = "<p>Jsi <b>NALEVO</b> zmáčkni šipku doleva nebo doprava a vrátíš se na střed.</p>"
            movedLeft = false;
        }
     } else if (event.code === "ArrowRight") {
        
        if (!movedRight) { 
            vychozi()
            movedRight = true;
        }  else if (movedLeft) {
            vychozi()
            movedLeft = false; 
        }  else {
            auto.style.margin = "0 0 0 500px";
            instrukce.innerHTML = "<p>Jsi <b>NAPRAVO</b> zmáčkni šipku doleva nebo doprava a vrátíš se na střed.</p>"
            movedRight = false;
        }
     } 
    });





///// DRUHY UKOL : formular


const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

let login = document.getElementById("login")

login.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email");

    const password = document.getElementById("password");


    if (email.value === user.email && password.value === user.password) {
        document.getElementById("login").innerHTML = `Přihlášený uživatel: ${user.name}`;
    } else {
        div.innerHTML = "<p>Špatně zadáno :(<p/>"
        password.value = '';
    }
});



///// TRETI UKOL : NWL



let address = document.getElementById("address");
let form = document.getElementById("form");


function trigger() {
    form.classList.add("red");
    address.addEventListener("input", check);
}

const check = (event) =>  {
    if (address.value === '' || !address.value.includes("@") ) {
        form.classList.add("red");
    } else {
        form.classList.remove("red");
    }
};

address.addEventListener("focus", trigger);


