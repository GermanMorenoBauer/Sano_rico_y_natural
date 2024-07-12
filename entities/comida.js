export class Comida{
    tipo;
    descripcion;
    composicion = [];

    agregarIngrediente(ingrediente){
        this.composicion.push(ingrediente);
    }

    porcentajeDeProteinas(){
        const comidasProteicas = this.composicion.filter((ingrediente)=> ingrediente.tipo == 'proteina');
        let porcentajeProteico = 0;
        comidasProteicas.forEach(ingrediente => {
            porcentajeProteico += ingrediente.porcentaje;
        })
        return porcentajeProteico;
    }

    porcentajeDeVegetales(){
        const vegetales = this.composicion.filter((ingrediente)=> ingrediente.tipo == 'vegetal');
        let porcentajeVegetal = 0;
        vegetales.forEach(ingrediente => {
            porcentajeVegetal += ingrediente.porcentaje;
        })
        return porcentajeVegetal;
    }
}

