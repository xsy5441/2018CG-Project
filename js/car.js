var car;
function initCar() {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('./assets/');
    mtlLoader.load('car.mtl', function (materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('./assets/');
        objLoader.load('car.obj', function (object) {
            car = object;
            car.children.forEach(function (item) {
                item.castShadow = true;
            });
            car.position.set(0, 0,50);
            car.rotation.y=-Math.PI/2;
            scene.add(car);

        }, function () {
            console.log('progress');
        }, function () {
            console.log('error');
        });
    });
}
