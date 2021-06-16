//variables globales

const form = document.getElementById("formulario");
let table = document.getElementById("table");
const listCars = document.getElementById("list-cars");
let arrayListCars = [];


//funciones

const CreateItem = (car) => {

    let newItem = car;
    arrayListCars.push(newItem); 
    //console.log(arrayListCars); 
    return newItem;
}

const save = () => {
    localStorage.setItem("registros", JSON.stringify(arrayListCars));
    renderRegister();
}

const renderRegister = () => {
    listCars.innerHTML = "";
    arrayListCars = JSON.parse(localStorage.getItem("registros"));
    if(arrayListCars ===null){
        arrayListCars = [];
    }
    else{
        arrayListCars.forEach( element =>{
            //console.log(element);
            /*listCars.innerHTML += `
              <td>${element.name}</td>
              <td>${element.model}</td>
              <td>${element.doors}</td>
              <td>${element.color}</td>
              <td>${element.brand}</td>
            `;
            */
            let newTr = document.createElement("tr");
            newTr.setAttribute("class", "fila");
            listCars.appendChild(newTr);

            let newTdName = document.createElement("td");
            newTdName.setAttribute("class", "columna");
            newTdName.innerText = element.name;
                newTr.appendChild(newTdName);
            
            let newTdModel = document.createElement("td");
            newTdModel.setAttribute("class", "columna");
            newTdModel.innerText = element.model;
                newTr.appendChild(newTdModel);

            let newTdDoors = document.createElement("td");
            newTdDoors.setAttribute("class", "columna");
            newTdDoors.innerText = element.doors;
                newTr.appendChild(newTdDoors);
            
            let newTdColor = document.createElement("td");
            newTdColor.setAttribute("class", "columna");
            newTdColor.innerText = element.color;
                newTr.appendChild(newTdColor);
            
            let newTdBrand = document.createElement("td");
            newTdBrand.setAttribute("class", "columna");
            newTdBrand.innerText = element.brand;
                newTr.appendChild(newTdBrand);
            
            let newTdEdit = document.createElement("td");
            newTdEdit.setAttribute("class", "columna");
            newTdEdit.setAttribute("class", "edit");
            newTdEdit.innerHTML = `<i class=" icono fas fa-edit"></i>`;
                newTr.appendChild(newTdEdit);
            
            let newTdDelete = document.createElement("td");
            newTdDelete.setAttribute("class", "columna");
            newTdDelete.setAttribute("class", "delete");
            newTdDelete.innerHTML = `<i class=" icono fas fa-trash"></i>`;
                newTr.appendChild(newTdDelete);

        });
    }
    table.appendChild(listCars);
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

