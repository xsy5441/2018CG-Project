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

function initTree() {	
	var leafMat = new THREE.MeshPhongMaterial({
	        //color: 0xEE7621, 
	        color: 0x228b2e,
	        shininess:0,
	        shading:THREE.FlatShading,
	    });

	var trunkMat = new THREE.MeshPhongMaterial({
	        color: 0x8b4500,
	        shininess:0,
	        shading:THREE.FlatShading,
	});


	var trunkGeom = new THREE.CubeGeometry( 5, 24, 5, 1 );
	  trunkGeom.vertices[4].x += 1.0;
	  trunkGeom.vertices[4].z += 1.0;
	  trunkGeom.vertices[5].x += 1.0;
	  trunkGeom.vertices[5].z -= 1.0;
	  trunkGeom.vertices[0].x -= 1.0;
	  trunkGeom.vertices[0].z -= 1.0;
	  trunkGeom.vertices[1].x -= 1.0;
	  trunkGeom.vertices[1].z += 1.0;
	var trunk = new THREE.Mesh(trunkGeom, trunkMat);
	trunk.castShadow = true;
	
	var leafGeom = new THREE.IcosahedronGeometry(15, 0); // new THREE.SphereGeometry( 15, 6, 6 );
	var leaf = new THREE.Mesh(leafGeom, leafMat);
	leaf.position.y = 20;
	leaf.castShadow = true;

	var tree1 = new THREE.Group();
	tree1.add(trunk);
	tree1.add(leaf);
	tree1.scale.set(0.5,0.5,0.5);
	tree1.position.y = 5;	
	tree1.position.x = -250;
	tree1.position.z = -250;

	var tree2 = new THREE.Group();
	var trunk2 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk2.castShadow = true;
	var leaf2 = new THREE.Mesh(leafGeom, leafMat);
	leaf2.position.y = 20;
	leaf2.castShadow = true;
	tree2.add(trunk2);
	tree2.add(leaf2);
	tree2.scale.set(0.5,0.5,0.5);
	tree2.position.y = 5;
	tree2.position.x = -250;
	tree2.position.z = -230;

	var tree3 = new THREE.Group();
	var trunk3 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk3.castShadow = true;
	var leaf3 = new THREE.Mesh(leafGeom, leafMat);
	leaf3.position.y = 20;
	leaf3.castShadow = true;
	tree3.add(trunk3);
	tree3.add(leaf3);
	tree3.scale.set(0.5,0.5,0.5);
	tree3.position.y = 5;
	tree3.position.x = -250;
	tree3.position.z = -210;

	var tree4 = new THREE.Group();
	var trunk4 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk4.castShadow = true;
	var leaf4 = new THREE.Mesh(leafGeom, leafMat);
	leaf4.position.y = 20;
	leaf4.castShadow = true;
	tree4.add(trunk4);
	tree4.add(leaf4);
	tree4.scale.set(0.5,0.5,0.5);
	tree4.position.y = 5;
	tree4.position.x = -250;
	tree4.position.z = -190;

	var tree5 = new THREE.Group();
	var trunk5 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk5.castShadow = true;
	var leaf5 = new THREE.Mesh(leafGeom, leafMat);
	leaf5.position.y = 20;
	leaf5.castShadow = true;
	tree5.add(trunk5);
	tree5.add(leaf5);
	tree5.scale.set(0.5,0.5,0.5);
	tree5.position.y = 5;
	tree5.position.x = -250;
	tree5.position.z = -170;

	var tree6 = new THREE.Group();
	var trunk6 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk6.castShadow = true;
	var leaf6 = new THREE.Mesh(leafGeom, leafMat);
	leaf6.position.y = 20;
	leaf6.castShadow = true;
	tree6.add(trunk6);
	tree6.add(leaf6);
	tree6.scale.set(0.5,0.5,0.5);
	tree6.position.y = 5;
	tree6.position.x = -250;
	tree6.position.z = -150;

	var tree7 = new THREE.Group();
	var trunk7 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk7.castShadow = true;
	var leaf7 = new THREE.Mesh(leafGeom, leafMat);
	leaf7.position.y = 20;
	leaf7.castShadow = true;
	tree7.add(trunk7);
	tree7.add(leaf7);
	tree7.scale.set(0.5,0.5,0.5);
	tree7.position.y = 5;
	tree7.position.x = -250;
	tree7.position.z = -130;

	var tree8 = new THREE.Group();
	var trunk8 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk8.castShadow = true;
	var leaf8 = new THREE.Mesh(leafGeom, leafMat);
	leaf8.position.y = 20;
	leaf8.castShadow = true;
	tree8.add(trunk8);
	tree8.add(leaf8);
	tree8.scale.set(0.5,0.5,0.5);
	tree8.position.y = 5;
	tree8.position.x = -90;
	tree8.position.z = -250;

	var tree9 = new THREE.Group();
	var trunk9 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk9.castShadow = true;
	var leaf9 = new THREE.Mesh(leafGeom, leafMat);
	leaf9.position.y = 20;
	leaf9.castShadow = true;
	tree9.add(trunk9);
	tree9.add(leaf9);
	tree9.scale.set(0.5,0.5,0.5);
	tree9.position.y = 5;
	tree9.position.x = -90;
	tree9.position.z = -230;

	var tree10 = new THREE.Group();
	var trunk10 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk10.castShadow = true;
	var leaf10 = new THREE.Mesh(leafGeom, leafMat);
	leaf10.position.y = 20;
	leaf10.castShadow = true;
	tree10.add(trunk10);
	tree10.add(leaf10);
	tree10.scale.set(0.5,0.5,0.5);
	tree10.position.y = 5;
	tree10.position.x = -90;
	tree10.position.z = -210;

	var tree11 = new THREE.Group();
	var trunk11 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk11.castShadow = true;
	var leaf11 = new THREE.Mesh(leafGeom, leafMat);
	leaf11.position.y = 20;
	leaf11.castShadow = true;
	tree11.add(trunk11);
	tree11.add(leaf11);
	tree11.scale.set(0.5,0.5,0.5);
	tree11.position.y = 5;
	tree11.position.x = -90;
	tree11.position.z = -190;

	var tree12 = new THREE.Group();
	var trunk12 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk12.castShadow = true;
	var leaf12 = new THREE.Mesh(leafGeom, leafMat);
	leaf12.position.y = 20;
	leaf12.castShadow = true;
	tree12.add(trunk12);
	tree12.add(leaf12);
	tree12.scale.set(0.5,0.5,0.5);
	tree12.position.y = 5;
	tree12.position.x = -90;
	tree12.position.z = -170;

	var tree13 = new THREE.Group();
	var trunk13 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk13.castShadow = true;
	var leaf13 = new THREE.Mesh(leafGeom, leafMat);
	leaf13.position.y = 20;
	leaf13.castShadow = true;
	tree13.add(trunk13);
	tree13.add(leaf13);
	tree13.scale.set(0.5,0.5,0.5);
	tree13.position.y = 5;
	tree13.position.x = -90;
	tree13.position.z = -150;

	var tree14 = new THREE.Group();
	var trunk14 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk14.castShadow = true;
	var leaf14 = new THREE.Mesh(leafGeom, leafMat);
	leaf14.position.y = 20;
	leaf14.castShadow = true;
	tree14.add(trunk14);
	tree14.add(leaf14);
	tree14.scale.set(0.5,0.5,0.5);
	tree14.position.y = 5;
	tree14.position.x = -90;
	tree14.position.z = -130;

	var tree15 = new THREE.Group();
	var trunk15 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk15.castShadow = true;
	var leaf15 = new THREE.Mesh(leafGeom, leafMat);
	leaf15.position.y = 20;
	leaf15.castShadow = true;
	tree15.add(trunk15);
	tree15.add(leaf15);
	tree15.scale.set(0.5,0.5,0.5);
	tree15.position.y = 5;
	tree15.position.x = -90;
	tree15.position.z = -110;

	var tree16 = new THREE.Group();
	var trunk16 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk16.castShadow = true;
	var leaf16 = new THREE.Mesh(leafGeom, leafMat);
	leaf16.position.y = 20;
	leaf16.castShadow = true;
	tree16.add(trunk16);
	tree16.add(leaf16);
	tree16.scale.set(0.5,0.5,0.5);
	tree16.position.y = 5;
	tree16.position.x = -90;
	tree16.position.z = -90;

	var tree17 = new THREE.Group();
	var trunk17 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk17.castShadow = true;
	var leaf17 = new THREE.Mesh(leafGeom, leafMat);
	leaf17.position.y = 20;
	leaf17.castShadow = true;
	tree17.add(trunk17);
	tree17.add(leaf17);
	tree17.scale.set(0.5,0.5,0.5);
	tree17.position.y = 5;
	tree17.position.x = -90;
	tree17.position.z = -70;

	var tree18 = new THREE.Group();
	var trunk18 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk18.castShadow = true;
	var leaf18 = new THREE.Mesh(leafGeom, leafMat);
	leaf18.position.y = 20;
	leaf18.castShadow = true;
	tree18.add(trunk18);
	tree18.add(leaf18);
	tree18.scale.set(0.5,0.5,0.5);
	tree18.position.y = 5;
	tree18.position.x = -90;
	tree18.position.z = -50;

	var tree19 = new THREE.Group();
	var trunk19 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk19.castShadow = true;
	var leaf19 = new THREE.Mesh(leafGeom, leafMat);
	leaf19.position.y = 20;
	leaf19.castShadow = true;
	tree19.add(trunk19);
	tree19.add(leaf19);
	tree19.scale.set(0.5,0.5,0.5);
	tree19.position.y = 5;
	tree19.position.x = -90;
	tree19.position.z = -30;

	var tree20 = new THREE.Group();
	var trunk20 = new THREE.Mesh(trunkGeom, trunkMat);
	trunk20.castShadow = true;
	var leaf20 = new THREE.Mesh(leafGeom, leafMat);
	leaf20.position.y = 20;
	leaf20.castShadow = true;
	tree20.add(trunk20);
	tree20.add(leaf20);
	tree20.scale.set(0.5,0.5,0.5);
	tree20.position.y = 5;
	tree20.position.x = -90;
	tree20.position.z = -10;


	scene.add(tree1);
	scene.add(tree2);
	scene.add(tree3);
	scene.add(tree4);
	scene.add(tree5);
	scene.add(tree6);
	scene.add(tree7);
	scene.add(tree8);
	scene.add(tree9);
	scene.add(tree10);
	scene.add(tree11);
	scene.add(tree12);
	scene.add(tree13);
	scene.add(tree14);
	scene.add(tree15);
	scene.add(tree16);
	scene.add(tree17);
	scene.add(tree18);
	scene.add(tree19);
	scene.add(tree20);
	//scene.add(tree21);
	//scene.add(tree22);
	//scene.add(tree23);
	//scene.add(tree24);

	
}


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
	initTree();
}