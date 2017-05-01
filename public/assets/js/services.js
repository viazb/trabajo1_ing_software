angular.module('table.services', [])

//datos de autores
.factory('Autor', function(){
	return{
		get : function(){
			var data = [
				{ id: 1, nombre:'Autor 1',	 titulo: 'Libro1', Libroid: 101,Area: 'Matematica' },
				{ id: 1, nombre:'Autor 1',	 titulo: 'Libro2', Libroid: 102,Area: 'Matematica' },
				{ id: 1, nombre:'Autor 1',	 titulo: 'Libro3', Libroid: 103,Area: 'Matematica' },
				{ id: 1, nombre:'Autor 1',	 titulo: 'Libro4', Libroid: 104,Area: 'Novela' },
				{ id: 2, nombre:'Autor 2',	 titulo: 'Libro5', Libroid: 105,Area: 'Novela' },
				{ id: 3, nombre:'Autor 3',	 titulo: 'Libro6', Libroid: 106,Area: 'Novela' },
				{ id: 4, nombre:'Autor 4',	 titulo: 'Libro7', Libroid: 107,Area: 'Ficción' },
				{ id: 5, nombre:'Autor 5',	 titulo: 'Libro8', Libroid: 108,Area: 'Ficción' },
				{ id: 2, nombre:'Autor 2',	 titulo: 'Libro9', Libroid: 109,Area: 'Ficción' },
				{ id: 5, nombre: 'Autor 5',	titulo: 'Libro10', Libroid: 110, Area: 'Historia' },
				{ id: 3, nombre: 'Autor 3',	titulo: 'Libro11', Libroid: 111, Area: 'Historia' },
				{ id: 4, nombre: 'Autor 4',	titulo: 'Libro12', Libroid: 112, Area: 'Historia' },
				{ id: 4, nombre: 'Autor 4',	titulo: 'Libro13', Libroid: 113, Area: 'Historia' },
				{ id: 4, nombre: 'Autor 4',	titulo: 'Libro14', Libroid: 114, Area: 'Historia' },
				{ id: 2, nombre: 'Autor 2',	 titulo: 'Libro15', Libroid:115, Area: 'Computación' },
				{ id: 4, nombre: 'Autor 4',	 titulo: 'Libro16', Libroid:116, Area: 'Computación' },
				{ id: 3, nombre: 'Autor 3',	 titulo: 'Libro17', Libroid:117, Area: 'Biografias' },
				{ id: 2, nombre: 'Autor 2',	 titulo: 'Libro18', Libroid:118, Area: 'Biografias' },
				{ id: 3, nombre: 'Autor 3',	 titulo: 'Libro19', Libroid:119, Area: 'Biografias' },
				{ id: 4, nombre: 'Autor 4',	 titulo: 'Libro20', Libroid:120, Area: 'Terror' }
									];
			return data;
		}

	}
})

//datos de Libros
.factory('Libro', function(){
	return{
		get : function(){
			var data = [
					{ id: 101, titulo: 'Libro1',  autor: 'Autor 1', Area: 'Matematica' },
					{ id: 102, titulo: 'Libro2',  autor: 'Autor 1', Area: 'Matematica' },
					{ id: 103, titulo: 'Libro3',  autor: 'Autor 1', Area: 'Matematica' },
					{ id: 104, titulo: 'Libro4',  autor: 'Autor 1', Area: 'Novela' },
					{ id: 105, titulo: 'Libro5',  autor: 'Autor 2', Area: 'Novela' },
					{ id: 106, titulo: 'Libro6',  autor: 'Autor 3', Area: 'Novela' },
					{ id: 107, titulo: 'Libro7',  autor: 'Autor 4', Area: 'Ficción' },
					{ id: 108, titulo: 'Libro8',  autor: 'Autor 5', Area: 'Ficción' },
					{ id: 109, titulo: 'Libro9',  autor: 'Autor 2', Area: 'Ficción' },
					{ id: 110, titulo: 'Libro10', autor: 'Autor 5',  Area: 'Historia' },
					{ id: 111, titulo: 'Libro11', autor: 'Autor 3',  Area: 'Historia' },
					{ id: 112, titulo: 'Libro12', autor: 'Autor 4',  Area: 'Historia' },
					{ id: 113, titulo: 'Libro13', autor: 'Autor 4',  Area: 'Historia' },
					{ id: 114, titulo: 'Libro14', autor: 'Autor 4',  Area: 'Historia' },
					{ id: 115, titulo: 'Libro15', autor: 'Autor 2',  Area: 'Computación' },
					{ id: 116, titulo: 'Libro16', autor: 'Autor 4',  Area: 'Computación' },
					{ id: 117, titulo: 'Libro17', autor: 'Autor 3',  Area: 'Biografias' },
					{ id: 118, titulo: 'Libro18', autor: 'Autor 2',  Area: 'Biografias' },
					{ id: 119, titulo: 'Libro19', autor: 'Autor 3',  Area: 'Biografias' },
					{ id: 120, titulo: 'Libro20', autor: 'Autor 4',  Area: 'Terror' }
			];
			return data;
		}
	}
})


//datos de Area
.factory('Tema', function(){
	return{
		get : function(){
			var data = [
				{ id: 1,  Area: 'Matematica', titulo: 'Libro1', Libroid: '1',	autor: 'Autor 1',	},
				{ id: 1,  Area: 'Matematica', titulo: 'Libro2', Libroid: '2',	autor: 'Autor 1',	},
				{ id: 1,  Area: 'Matematica', titulo: 'Libro3', Libroid: '3',	autor: 'Autor 1',	},
				{ id: 2,  Area: 'Novela' 	, titulo: 'Libro4', Libroid: '4',	autor: 'Autor 2',	},
				{ id: 2,  Area: 'Novela'	, titulo: 'Libro5', Libroid: '5',	autor: 'Autor 3',	},
				{ id: 2,  Area: 'Novela'	, titulo: 'Libro6', Libroid: '6',	autor: 'Autor 4',	},
				{ id: 3,  Area: 'Ficción'	, titulo: 'Libro7', Libroid: '7',	autor: 'Autor 5',	},
				{ id: 3,  Area: 'Ficción'	, titulo: 'Libro8', Libroid: '8',	autor: 'Autor 6',	},
				{ id: 3,  Area: 'Ficción'	, titulo: 'Libro9', Libroid: '9',	autor: 'Autor 6',	},
				{ id: 4, Area: 'Historia'	,titulo: 'Libro10', Libroid: '10',	autor: 'Autor7', 	},
				{ id: 4, Area: 'Historia'	,titulo: 'Libro11', Libroid: '11',	autor: 'Autor7', 	},
				{ id: 4, Area: 'Historia'	,titulo: 'Libro12', Libroid: '12',	autor: 'Autor7', 	},
				{ id: 4, Area: 'Historia'	,titulo: 'Libro13', Libroid: '13',	autor: 'Autor8', 	},
				{ id: 4, Area: 'Historia'	,titulo: 'Libro14', Libroid: '14',	autor: 'Autor9', 	},
				{ id: 5, Area: 'Computación' , titulo: 'Libro15', Libroid: '15',autor: 'Autor10',	},
				{ id: 5, Area: 'Computación' , titulo: 'Libro16', Libroid: '16',autor: 'Autor11',	},
				{ id: 6, Area: 'Biografias' , titulo: 'Libro17', Libroid: '17',	autor: 'Autor11',	},
				{ id: 6, Area: 'Biografias' , titulo: 'Libro18', Libroid: '18',	autor: 'Autor12',	},
				{ id: 6, Area: 'Biografias' , titulo: 'Libro19', Libroid: '19',	autor: 'Autor13',	},
				{ id: 7, Area: 'Terror'		, titulo: 'Libro20', Libroid: '20',	autor: 'Autor14',	 }
			];
			return data;
		}
	}
})

//servicio LLama los datos Autor, Libros, areas.
.factory('Call', function($injector){
	return {
		get : function(type){
			var service = $injector.get(type);
			return service.get();
		}
	};
})

//serviceCrud, realiza las acciones crud
//fincion list solo realiza consulta
.factory('ServiceCrud', function(Call){
  return{
      list : function(type){
        return Call.get(type);
      }
  };
})

//Manipula datos en la tabla
.factory('ObjectService', function(){
	return {
		getPropertiesObject: function(object){
			var properties = [];
			for( var property in object){
				properties.push(property);
			}
			return properties;
	    },
	    cloneObject: function (obj) {
			if (null === obj || "object" !== typeof obj) {
				return obj;
			}
			var copy = obj.constructor();
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
			}
			return copy;
	    },
		createParamObject: function(obj, parameter, value){
			return Object.defineProperty(obj, parameter, {value: value, writable : true, configurable: true, enumerable : true } );
		},
	}
})
;
