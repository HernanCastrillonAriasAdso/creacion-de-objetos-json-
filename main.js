let objeto =
                        {
                           "vehiculos":
                         [
                          {
                            "placa":"OCM365",
                            "numeroserie":99910,
                            "modelo":2010,
                            "marca":"renaul",
                            "kilometraje":20000,
                            "tipo":"sedan",
                          },
                          {
                            "placa":"DZM223",
                            "numeroserie":99911,
                            "modelo":2011,
                            "marca":"mazda",
                            "kilometraje":20001,
                            "tipo":"hatchback",
                          },
                          {
                            "placa":"RTH209",
                            "numeroserie":99912,
                            "modelo":2012,
                            "marca":"toyota",
                            "kilometraje":20002,
                            "tipo":"sedan",
                          },
                          {
                            "placa":"TIR409",
                            "numeroserie":99913,
                            "modelo":2013,
                            "marca":"chevrolet",
                            "kilometraje":20003,
                            "tipo":"hatchback",
                           },
                           {
                            "placa":"TLR935",
                            "numeroserie":99914,
                            "modelo":2014,
                            "marca":"volkswagen",
                            "kilometraje":20004,
                            "tipo":"coupe",
                           }
                          ]
                         }
                        
                        
                       
// console.log(objeto.vehiculos);
let placas = objeto.vehiculos
let lista = document.querySelector("#container")

placas.map(
    (vehiculo)=>{
        let li = document.createElement('li') 
        li.append(vehiculo.placa + " - "+ vehiculo.marca)
        lista.append(li)

    }
)
