class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(this.nombre);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.salud += 10;
    }
}



const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
