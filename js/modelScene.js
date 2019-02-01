var group;
var villa1;

function initVilla1() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('villa.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('villa.obj', function(object) {
	        villa1 = object;
	        villa1.children.forEach(function(item) {
	            item.castShadow = true;
	        });

	        villa1.rotation.y = -10.0/180 * Math.PI;
	        villa1.position.z = -180;
	        villa1.position.x = -770;
			villa1.position.y = 0;
			villa1.scale.set(0.005,0.005,0.005);
			//villa1.updateMatrix();
			
			scene.add(villa1);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var villa2;
function initVilla2() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('villa.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('villa.obj', function(object) {
			villa2 = object;
	        villa2.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        villa2.rotation.y = -10.0/180 * Math.PI;
	        villa2.position.z = -90;
	        villa2.position.x = -770;
			villa2.position.y = 0;
			villa2.scale.set(0.005,0.005,0.005);
			scene.add(villa2);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var library;
function initLibrary() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('library.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('library.obj', function(object) {
	        library = object;
	        library.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        library.position.z = 160;
	        library.position.x = 150;
	        library.scale.set(0.003,0.003,0.003);

	        scene.add(library);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}


var mall;
function initMall() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('mall.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('mall.obj', function(object) {
	        mall = object;
	        mall.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        mall.position.z = -60;
	        mall.position.x = -180;
	        mall.position.y = -1;
	        mall.scale.set(0.0015,0.0015,0.0015);

	        scene.add(mall);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}


var government;
function initGovernment() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('government.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('government.obj', function(object) {
	        government = object;
	        government.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        government.position.z = -200;
	        government.position.x = -180;
	        government.position.y = -4;
	        government.scale.set(0.003,0.003,0.003);

	        scene.add(government);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var gas;
function initGas() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('gas.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('gas.obj', function(object) {
	        gas = object;
	        gas.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        gas.position.z = 240;
	        gas.position.x = -10;
	        gas.position.y = 0;
	        gas.scale.set(0.01,0.01,0.01);

	        scene.add(gas);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var apartment1;
var apartment2;
var apartment3;
var apartment4;
var apartment5;
var apartment6;

function initApartment1() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment1 = object;
	        apartment1.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment1.scale.set(0.003,0.003,0.003);
	        apartment1.position.z = -200;
	        apartment1.position.x = 80;
	        apartment1.position.y = 0;	        

	        scene.add(apartment1);


	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

function initApartment2() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment2 = object;
	        apartment2.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment2.scale.set(0.003,0.003,0.003);
	        apartment2.position.z = -40;
	        apartment2.position.x = -30;
	        apartment2.position.y = 0;

	        scene.add(apartment2);


	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

function initApartment3() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment3 = object;
	        apartment3.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment3.scale.set(0.003,0.003,0.003);
	        apartment3.position.z = -120;
	        apartment3.position.x = -30;
	        apartment3.position.y = 0;

	        scene.add(apartment3);


	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

function initApartment4() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment4 = object;
	        apartment4.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment4.scale.set(0.003,0.003,0.003);
	        apartment4.position.z = -200;
	        apartment4.position.x = -30;
	        apartment4.position.y = 0;

	        scene.add(apartment4);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}


function initApartment5() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment5 = object;
	        apartment5.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment5.scale.set(0.003,0.003,0.003);
	        apartment5.position.z = -120;
	        apartment5.position.x = 80;
	        apartment5.position.y = 0;	        

	        scene.add(apartment5);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}


function initApartment6() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('apartment.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('apartment.obj', function(object) {
	        apartment6 = object;
	        apartment6.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        apartment6.scale.set(0.003,0.003,0.003);
	        apartment6.position.z = -40;
	        apartment6.position.x = 80;
	        apartment6.position.y = 0;	        

	        scene.add(apartment6);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var clockTower;
function initClockTower() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('clockTower.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('clockTower.obj', function(object) {
	        clockTower = object;
	        clockTower.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        clockTower.position.z = 100;
	        clockTower.position.x = 20;
	        clockTower.position.y = 0;
	        clockTower.scale.set(0.0003,0.0003,0.0003);

	        scene.add(clockTower);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}

var publicbuilding;
function initPublicBuilding() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('publicbuilding.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('publicbuilding.obj', function(object) {
	        publicbuilding = object;
	        publicbuilding.children.forEach(function(item) {
	            item.castShadow = true;
	        });
	        publicbuilding.scale.set(0.0025,0.0025,0.0025);
	        publicbuilding.position.z = 670;
	        publicbuilding.position.x = -270;
	        publicbuilding.position.y = 0;	        

	        scene.add(publicbuilding);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}



/*var fountain;
function initFountain() {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('./assets/');
	mtlLoader.load('fountain.mtl', function(materials) {
	    materials.preload();
	    var objLoader = new THREE.OBJLoader();
	    objLoader.setMaterials(materials);
	    objLoader.setPath('./assets/');
	    objLoader.load('fountain.obj', function(object) {
	        fountain = object;
	        fountain.children.forEach(function(item) {
	            item.castShadow = true;
	        });

	        //fountain.rotation.y = -10.0/180 * Math.PI;
	        fountain.position.z = 20;
	        fountain.position.x = 30;
			fountain.position.y = 0;
			fountain.scale.set(0.005,0.005,0.005);
			
			scene.add(fountain);

	    }, function() {
	        console.log('progress');
	    }, function() {
	        console.log('error');
	    });
	});
}
*/
function modelScene() {
	initVilla1();
	initVilla2();
	initApartment1();
	initApartment2();
	initApartment3();
	initApartment4();
	initApartment5();
	initApartment6();
	initGas();
	initGovernment();
	initMall();
	initLibrary();
	initPublicBuilding();
	initClockTower();
	//initFountain();
	
}