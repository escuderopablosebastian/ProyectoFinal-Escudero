//class

class CostoPais{
    constructor(id, pais, costoDiario, img){
        this.id=id;
        this.pais=pais;
        this.costoDiario=costoDiario;
        this.img=img;
        this.cantidad=1;
    }
}

const indonesia= new CostoPais(1,"INDONESIA",35,"img/indonesia.png");
const filipinas = new CostoPais(2,"FILIPINAS",35,"img/filipinas.png");
const malasia = new CostoPais(3,"MALASIA",40,"img/malasia.png");
const singapur = new CostoPais(4,"SINGAPUR",80,"img/singapur.png");
const tailandia = new CostoPais(5,"TAILANDIA",30,"img/tailandia.png");
const vietnam = new CostoPais(6,"VIETNAM",40,"img/vietnam.png");
const brunei = new CostoPais(7,"BRUNEI",60,"img/brunei.png");
const camboya = new CostoPais(8,"CAMBOYA",40,"img/camboya.png");
const laos = new CostoPais(9,"LAOS",30,"img/laos.png");
const myanmar = new CostoPais(10,"MYANMAR",50,"img/myanmar.png");

//Arrays
let viajeElegido=[];
const costoPais=[indonesia,filipinas,malasia,singapur,tailandia,vietnam,brunei,camboya,laos,myanmar];
console.log(costoPais);

//**CARGAR PRESUPUESTO DESDE LOCAL STORAGE **/
if(localStorage.getItem("presupuesto")){
    viajeElegido=JSON.parse(localStorage.getItem("presupuesto"));
}

//Modificacion DOM
const contenedorPaises= document.getElementById("contenedorPaises");

//Funcion para mostrar paises
const mostrarPaises =()=>{
    costoPais.forEach(pais=> {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-sm-12");
        card.innerHTML= `
            <div class="card">
                <img src="${pais.img}" class="card-img-tom imgPais">
                <div class="card-body">
                    <h2 class="text-center"> ${pais.pais}</h2>
                    <p class="text-center"> Costo diario: ${pais.costoDiario} USD</p>
                    <label for="dias${pais.id}" class="text-center m-1">Cantidad de dias:</label><br>
                    <input id="dias${pais.id}" class="text-center m-1" type="number" placeholder="0">
                    <button class="btn btn-outline-primary m-1" id="boton${pais.id}">Agregar al presupuesto</button>
                </div>
            </div>`
        contenedorPaises.appendChild(card);
        
        //Agregar paises al presupuesto
        const boton=document.getElementById(`boton${pais.id}`);
        boton.addEventListener("click",()=>{
            const cantidad=document.getElementById(`dias${pais.id}`).value;
            pais.cantidad=cantidad;
            agregarAlPresupuesto(pais.id);
        })
        
    })
}
mostrarPaises();
console.log(viajeElegido)
//funcion agregar al presupuesto
const agregarAlPresupuesto=(id)=>{
    const paisEnPresupuesto=viajeElegido.find(pais=>pais.id===id);
    if(paisEnPresupuesto){
        paisEnPresupuesto.cantidad;
        console.log(paisEnPresupuesto.cantidad);
    }else{
        const pais=costoPais.find(pais=>pais.id===id);
        viajeElegido.push(pais);
    }
    console.log(viajeElegido);
    //localStorage:
    localStorage.setItem("presupuesto",JSON.stringify(viajeElegido));
}

//Mostrar la lista de paises:
const contenedorPresupuesto=document.getElementById("contenedorPresupuesto");
const verPresupuesto=document.getElementById("verPresupuesto");

verPresupuesto.addEventListener("click",()=>{
    mostrarPresupuesto();
})

const mostrarPresupuesto=()=>{
    contenedorPresupuesto.innerHTML="";
    viajeElegido.forEach(pais=>{
        const card = document.createElement("div");
        
        card.innerHTML= `
                <div class="paisesConDias justify-content-between">
                    <p><img src="${pais.img}" class="imgPaisElegido"> ${pais.pais} por ${pais.cantidad} dias</p>
                    <button class="btn btn-outline-primary" id="eliminar${pais.id}">Eliminar</button>
                </div>`

        contenedorPresupuesto.appendChild(card);

        //Eliminar paises del presupuesto:

        const boton=document.getElementById(`eliminar${pais.id}`);
        boton.addEventListener("click",()=>{
            eliminarDelPresupuesto(pais.id);
        })
    })
}

//Funcion que elimina el pais del presupuesto:
const eliminarDelPresupuesto=(id)=>{
    const pais=viajeElegido.find(pais=>pais.id===id);
    const indice=viajeElegido.indexOf(pais);
    viajeElegido.splice(indice,1);
    mostrarPresupuesto();

    //LocalStorage:
    localStorage.setItem("presupuesto",JSON.stringify(viajeElegido));

}

//Vaciamos el presupuesto:
const vaciarPresupuesto=document.getElementById("vaciarPresupuesto");

vaciarPresupuesto.addEventListener("click",()=>{
    eliminarTodoPresupuesto();
})

const eliminarTodoPresupuesto=()=>{
    viajeElegido=[];
    mostrarPresupuesto();

    //localStorage:
    localStorage.clear();   
}

//Mensaje con el total del presupuesto:

const total=document.getElementById("total");
const totalPres=document.getElementById("totalPresupuesto");
totalPres.addEventListener("click",()=>{
    calcularTotal();
})
const calcularTotal=()=>{
    let totalPresupuesto=0;
    viajeElegido.forEach(pais=>{
        totalPresupuesto+=pais.costoDiario*pais.cantidad;
    })
    total.innerHTML=`USD ${totalPresupuesto}`;
}





