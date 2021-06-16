//variables globales

const form = document.getElementById("formulario");
const listCars = document.getElementById("list-cars");


let arrayListCars = [];

//funciones

const CreateItem = (car) => {

    let newItem = car;
    arrayListCars.push(newItem); 
    console.log(arrayListCars); 
    return newItem;

}

//console.log(arrayListCars);
const save = () =>{
    localStorage.setItem("registros", JSON.stringify(arrayListCars));

}

const renderRegister = () =>{
    listCars.innerHTML = "";
    
}
//eventListener

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let infoCar = {
        name: document.getElementById("name").value,
        model: document.getElementById("model").value,
        doors: document.getElementById("doors").value,
        color: document.getElementById("color").value,
        brand: document.getElementById("brand").value
    }
        //console.log(itemCar);
    CreateItem(infoCar);
    save();
    form.reset();
});
  
document.addEventListener("DOMContentLoaded", renderRegister);

