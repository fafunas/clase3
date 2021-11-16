var app = new Vue({
    el: '#app',
    data: {
        titulo: "Clase 3",
        personas: [
            {
            nombre: "Fabian",
            Edad: 34,
            Sexo: "Masculino",
            Nacionalidad: "Argentino"
        },
        {
            nombre: "Maria",
            Edad: 30,
            Sexo: "Femenino",
            Nacionalidad: "Argentina"
        },
        {
            nombre: "Juan",
            Edad: 50,
            Sexo: "Masculino",
            Nacionalidad: "Paraguayo"
        },
        {
            nombre: "Silvia",
            Edad: 25,
            Sexo: "Femenino",
            Nacionalidad: "Chilena"
        }
    ],
    inputTitulo:"",
    inputDescripcion:"",

      
     
    },
    methods:{
        guardarTarea(){
            const nuevaTarea ={
                titulo: this.inputTitulo,
                descripcion: this.inputDescripcion
            }
            this.tareas.push(nuevaTarea)
        }
    }
  
  
  })