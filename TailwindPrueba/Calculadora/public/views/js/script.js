class Calculadora{
    constructor(){
        this.OpAnterior = document.getElementById("OpAnterior");
        this.OpActual = document.getElementById("OpActual");    
        this.clear();
    }

    clear(){
        this.ValorActual="0";
        this.ValorAnterior="";
        this.Operacion= undefined;
        this.actPantalla();
    }
    delete(){
        if(this.ValorActual=== "0") return;
        if(this.ValorActual.length === 1){
            this.ValorActual= "0";
        }else {
            this.ValorActual=this.ValorActual.slice(0,-1);
        }
        this.actPantalla();
    }
    appendNumber(numero){
        if (numero === '.' && this.ValorActual.includes('.')) return;
        if (this.ValorActual === '0' && numero !== '.') {
            this.ValorActual = numero;
        } else {
            this.ValorActual += numero;
        }
        this.actPantalla();
    }
    actPantalla(){
        this.OpActual.textContent=this.ValorActual;
        if (this.Operacion !=null){
            this.OpAnterior.textContent=`${this.ValorAnterior} ${this.Operacion}`;
        } else {
            this.OpAnterior.textContent="";
        }
    }
}

const calculadora = new Calculadora();