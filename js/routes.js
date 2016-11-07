'use strict';

$(document).ready(()=>{

	loader('p1.html')

	function loader(pagina){
		$('#main').load(pagina).show()
	}

	const PaginaController = {
		pagina1: ()=> {
			loader('p1.html')
		},
		pagina2: ()=>{
			loader('p2.html')
		},
		pagina3: ()=>{
			loader('p3.html')
		}
	};

	$.routes.add('/p1', PaginaController.pagina1)
	$.routes.add('/p2', PaginaController.pagina2)
	$.routes.add('/p3', PaginaController.pagina3)

})