//Alert bienvenida
alert("Bienvenido al simulador de presupuesto de viaje por el sudeste asiatico!")

//class
class Viaje{
    constructor (pais, cantidadDias, costoDiario){
        this.pais=pais;
        this.cantidadDias=cantidadDias;
        this.costoDiario=costoDiario;
    }
}

class CostoPais{
    constructor(pais, costoDiario){
        this.pais=pais;
        this.costoDiario=costoDiario;
    }
}

const indonesia= new CostoPais("indonesia",25);
const filipinas = new CostoPais("filipinas",25);
const malasia = new CostoPais("malasia",30);
const singapur = new CostoPais("singapur",50);
const tailandia = new CostoPais("tailandia",20);
const vietnam = new CostoPais("vietnam",30);
const brunei = new CostoPais("brunei",40);
const camboya = new CostoPais("camboya",30);
const laos = new CostoPais("laos",20);
const myanmar = new CostoPais("myanmar",30);

//Arrays
const viajeElegido=[];
const costoPais=[indonesia,filipinas,malasia,singapur,tailandia,vietnam,brunei,camboya,laos,myanmar];

let otroPais="si"

do{
    let pais = prompt("Los países que conforman el sudeste asiático son: Indonesia, Filipinas, Malasia, Singapur, Tailandia, Vietnam, Brunei, Camboya, Laos y Myanmar. ¿Que país desea visitar?")
    if(pais.toLowerCase() != "indonesia" && pais.toLowerCase() != "filipinas" && pais.toLowerCase() != "malasia" && pais.toLowerCase() != "singapur" && pais.toLowerCase() != "tailandia" && pais.toLowerCase() != "vietnam" && pais.toLowerCase() != "brunei" && pais.toLowerCase() != "camboya" && pais.toLowerCase() != "laos" && pais.toLowerCase() != "myanmar"){
        alert("Por favor, ingrese un pais correspondiente a la lista mostrada anteriormente.")
    }
    else{
        let dias = parseInt(prompt("¿Cuántos días desea viajar por "+pais+"?"))
        if(!isNaN(dias) && dias>0){
            const costo = costoPais.find(costo=>costo.pais==pais.toLowerCase());
            console.log(costo);
            let paisElegido=new Viaje (pais,dias,costo.costoDiario);
            viajeElegido.push(paisElegido);
            console.log(viajeElegido);
        }
        else{
            alert("Por favor, ingrese un valor numérico mayor a 0")
        }
    }
    otroPais=prompt("¿Desea agregar otro pais a su viaje? Conteste 'SI' o 'NO'")
}while (otroPais.toLowerCase() == "si")

let presupuestoTotal=viajeElegido.reduce((acumulador,pais)=>acumulador+(pais.cantidadDias*pais.costoDiario),0)
console.log(presupuestoTotal);

let totalDias=viajeElegido.reduce((acumulador,dias)=>acumulador+(dias.cantidadDias),0)

alert("El presupuesto aproximado para su viaje de "+totalDias+" dias por el sudeste asiático sería de: "+presupuestoTotal+" USD. Recuerde que este presupuesto no incluye precio de aéreos y traslados.");







