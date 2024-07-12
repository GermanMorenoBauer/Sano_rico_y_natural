import { Comida } from '../entities/comida.js';
import { Ingrediente } from '../entities/ingrediente.js';

test('Calcular porcentaje de proteínas en una comida,50% de proteínas (30% + 20%)', () => {
   
    let comida = new Comida();
    let ingrediente1 = new Ingrediente('proteina', 30);
    let ingrediente2 = new Ingrediente('proteina', 20);
    
    comida.agregarIngrediente(ingrediente1);
    comida.agregarIngrediente(ingrediente2);

    let resultado = comida.porcentajeDeProteinas();

    expect(resultado).toBe(50);
});


test('Calcular porcentaje de vegetales en una comida, 70% de vegetales (40% + 30%)', () => {
  
    let comida = new Comida();
    let ingrediente1 = new Ingrediente('vegetal', 40);
    let ingrediente2 = new Ingrediente('vegetal', 30);
   
    comida.agregarIngrediente(ingrediente1);
    comida.agregarIngrediente(ingrediente2);

    let resultado = comida.porcentajeDeVegetales();

    expect(resultado).toBe(70); 
});