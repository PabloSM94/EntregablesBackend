class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
        this.getFullName = function () {console.log("Nombre completo: "+this.nombre+" "+this.apellido)}
        this.addMascota = function (newMascota) {this.mascotas.push(newMascota)}
        this.countMascota = function () {console.log("Cantida de mascotas: "+ this.mascotas.length)}
        this.addBook = function (titulo, autor) {this.libros.push({"nombre": titulo, "autor": autor})}
        this.getBookNames = function() {
            let arrayTitulos = []
            for (let i=0; i<this.libros.length; i++) {
                arrayTitulos.push(this.libros[i].nombre);
            }
            console.log(arrayTitulos)
        }
    }
}

arrayDeLibros = [{"nombre": "El señor de los anillos", "autor": "J. R. R. Tolkien"},
                 {"nombre": "Crepúsculo", "autor": "Stephenie Meyer"}                      
]

arrayDeAnimales = ["Perro","Gato"]
//Ejemplo

user1 = new Usuario ("Juan","Perez",arrayDeLibros,arrayDeAnimales)
user1.getFullName()
user1.addMascota("Tortuga")
user1.countMascota()
user1.addBook("El señor de los anillos 2","J. R. R. Tolkien")
user1.getBookNames()