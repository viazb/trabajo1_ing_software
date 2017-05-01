angular.module('table.controller', [])
.controller('TableController',function($scope, $filter, ObjectService, ServiceCrud){

//limite de registros en la pagina
  ITEM_PER_PAGE = 5;
  //Array con los tipos de datos --ChangeData
  $scope.types = [{value: 'Autor', label:'Autores'}, {value: 'Libro', label:'Libros'}, {value: 'Tema', label:'Temas'} ];
  $scope.data = [];
  $scope.head = [];



  //cambiar los datos de la tabla
  $scope.changeData = function (){
  	$scope.uri = $scope.type.value;
  	$scope.data = ServiceCrud.list($scope.type.value);
  	$scope.head = ObjectService.getPropertiesObject($scope.data[0]);
  	$scope.propertiesHead = $scope.head;
  	$scope.filter = $filter('fieldsSelectFilter')( [ObjectService.cloneObject($scope.propertiesHead), ObjectService.cloneObject($scope.head)] );;
  	$scope.selectFilter = '$';
  	$scope.changeFilterTo();
  };

  //filtro
  $scope.changeFilterTo = function(){
    $scope.search = ObjectService.createParamObject({}, $scope.selectFilter, '');
  };


  //oredena
  $scope.orderBy = {pedicate: 'name', reverse: false};
  $scope.order = function(predicate) {
    $scope.orderBy.reverse = !$scope.orderBy.reverse;
    $scope.orderBy.predicate = predicate;
  };

  //paginacion
  $scope.limit = {per_page: ITEM_PER_PAGE};


  //Default
  $scope.type = $scope.types[0];
  $scope.changeData();
})
;
