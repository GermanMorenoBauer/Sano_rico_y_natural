export class PlanAlimenticio{
    constructor(edad, pesoActual, medidaDeCintura, duracion) {
        this.edad = edad;
        this.pesoActual = pesoActual;
        this.medidaDeCintura = medidaDeCintura;
        this.duracion = duracion;
        this.objetivos = [];
        this.comida = [];
        this.colaciones = [];
        this.bebidas = [];
    }
    
    agregarComida(comida) {
        this.comida.push(comida);
    }

    agregarObjetivo(objetivo) {
        this.objetivos.push(objetivo);
    }

    agregarColacion(colacion) {
        this.colaciones.push(colacion);
    }

    agregarBebida(bebida) {
        this.bebidas.push(bebida);
    }

    cantidadDeComidas() {
        return this.comida.length;
    }

    porcentajeDeObjetivosCumplidos() {
        var contador = 0;
        this.objetivos.forEach(objetivo => {
            if (objetivo.estaCumplido) {
                contador++;
            }
        });
        return (contador * 100) / this.objetivos.length;
    }

    calificacionFinal() {
        const porcentajeDeObjetivos = this.porcentajeDeObjetivosCumplidos();
        if (porcentajeDeObjetivos === 100) {
            return 'Excelente';
        } else if (porcentajeDeObjetivos >= 60) {
            return 'Muy Buena';
        } else if (porcentajeDeObjetivos >= 50) {
            return 'Buena';
        } else {
            return 'Regular';
        }
    }

    cantidadDeTipoDeComida(tipoDeComida) {
        return this.comida.filter(comida => comida.tipo === tipoDeComida).length;
    }

    esFuerteEnProteinas() {
        const comidasAC = this.comida.filter(comida => comida.tipo === 'AC');
        var totalProteinas = 0;
        comidasAC.forEach(comida => {
            totalProteinas += comida.porcentajeDeProteinas();
        });
        const promedioProteinas = totalProteinas / comidasAC.length;
        return promedioProteinas >= 50;
    }

    esBienVerde() {
        const comidasAC = this.comida.filter(comida => comida.tipo === 'AC');
        if (comidasAC.length === 0) return false; 

        let totalVegetales = 0;
        comidasAC.forEach(comida => {
            totalVegetales += comida.porcentajeDeVegetales();
        });
        const promedioVegetales = totalVegetales / comidasAC.length;
        return promedioVegetales > 35;
    }
    obtenerTotalColaciones() {
        return this.colaciones.length;
    }

    obtenerTotalBebidas() {
        return this.bebidas.length;
    }
}

