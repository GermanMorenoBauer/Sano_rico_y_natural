import { Comida } from "../entities/comida.js";
import { Ingrediente } from "../entities/ingrediente.js";
import { PlanAlimenticio } from "../entities/planAlimenticio.js";
import { Bebida } from "../entities/bebida.js";
import { Colacion } from "../entities/colacion.js";
import { Objetivo } from "../entities/objetivo.js";


test("Obtener la calificación final del plan alimenticio ('Muy Buena')", () => {
  
    let planAlimenticio = new PlanAlimenticio();

    let objetivo1 = new Objetivo("Objetivo 1", true);
    let objetivo2 = new Objetivo("Objetivo 2", true);
    let objetivo3 = new Objetivo("Objetivo 3", false);

    planAlimenticio.agregarObjetivo(objetivo1);
    planAlimenticio.agregarObjetivo(objetivo2);
    planAlimenticio.agregarObjetivo(objetivo3);

    let resultado = planAlimenticio.calificacionFinal();

    expect(resultado).toBe('Muy Buena');
});

test("Saber la cantidad total de comidas de un plan alimenticio (3 comidas)", () => {
   
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida('DM', 'Tostadas con queso untable');
    let comida2 = new Comida('AC', 'Pollo con arroz');
    let comida3 = new Comida('DM', 'Yogur con frutas');

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
    planAlimenticio.agregarComida(comida3);

    let resultado = planAlimenticio.cantidadDeComidas();

    expect(resultado).toBe(3);
});

test("Cantidad de comidas de tipo DM en el plan alimenticio", () => {
   
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'DM';
    let comida2 = new Comida();
    comida2.tipo = 'AC';
    let comida3 = new Comida();
    comida3.tipo = 'DM';

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
    planAlimenticio.agregarComida(comida3);

    let resultado = planAlimenticio.cantidadDeTipoDeComida('DM');

    expect(resultado).toBe(2);
});

test("Plan alimenticio es fuerte en proteínas", () => {
   
    let planAlimenticio = new PlanAlimenticio();

    let comida1 = new Comida();
    comida1.tipo = 'AC';
    
    let ingrediente1 = { tipo: 'proteina', porcentaje: 60 };
    comida1.agregarIngrediente(ingrediente1);

    let comida2 = new Comida();
    comida2.tipo = 'AC';
    
    let ingrediente2 = { tipo: 'proteina', porcentaje: 55 };
    comida2.agregarIngrediente(ingrediente2);

    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);

    let resultado = planAlimenticio.esFuerteEnProteinas();

    expect(resultado).toBe(true);
});


test("Saber si un plan alimenticio es bien verde (false)", () => {
 
    let planAlimenticio = new PlanAlimenticio();
   
    let comida1 = new Comida('AC', 'Pollo con vegetales');
    comida1.agregarIngrediente(new Ingrediente('vegetal', 20));
    comida1.agregarIngrediente(new Ingrediente('proteina', 60));
    
    let comida2 = new Comida('AC', 'Carne con ensalada');
    comida2.agregarIngrediente(new Ingrediente('vegetal', 25));
    comida2.agregarIngrediente(new Ingrediente('proteina', 50));
   
    planAlimenticio.agregarComida(comida1);
    planAlimenticio.agregarComida(comida2);
   
    expect(planAlimenticio.esBienVerde()).toBe(false);
});

test("Saber la cantidad total de colaciones permitidas en un plan alimenticio (3 colaciones)", () => {
    
    let planAlimenticio = new PlanAlimenticio();

    let colacion1 = new Colacion('Fruta');
    let colacion2 = new Colacion('Nueces');
    let colacion3 = new Colacion('Barra de cereal');

    planAlimenticio.agregarColacion(colacion1);
    planAlimenticio.agregarColacion(colacion2);
    planAlimenticio.agregarColacion(colacion3);

    let resultado = planAlimenticio.obtenerTotalColaciones();

    expect(resultado).toBe(3);
});

test("Saber la cantidad total de bebidas permitidas en un plan alimenticio (2 bebidas)", () => {
    
    let planAlimenticio = new PlanAlimenticio();

    let bebida1 = new Bebida('Agua');
    let bebida2 = new Bebida('Jugo de naranja');

    planAlimenticio.agregarBebida(bebida1);
    planAlimenticio.agregarBebida(bebida2);

    let resultado = planAlimenticio.obtenerTotalBebidas();

    expect(resultado).toBe(2);
});

