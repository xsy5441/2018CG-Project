var renderer;
var lastTime;
function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
    lastTime=performance.now();
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.y = 50;
}

var scene;
function initScene() {
    scene = new THREE.Scene();
    //增加雾化效果
    scene.fog = new THREE.FogExp2( 0xd0e0f0, 0.0025 );
}

var light;
function initLight() {
    light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 1.25 );
    light.position.set( 0.75, 1, 0.25 );
    scene.add( light );
}

var contrls;
function initControls(){
    controls = new THREE.FirstPersonControls( camera );
    controls.movementSpeed = 20;
    controls.lookSpeed = 0.05;
    controls.lookVertical = true;
}

function initGrid(){
    var helper = new THREE.GridHelper( 500, 50 );
    helper.setColors( 0x0000ff, 0x808080 );
    scene.add( helper );
}

var plane;
function initPlane(){
    plane = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500 ), new THREE.MeshBasicMaterial( { color: 0x101018 } ) );
    plane.rotation.x = - 90 * Math.PI / 180;
    plane.position.set(0,0,0);
    scene.add( plane );
}

function animation() {
    var time = performance.now() / 1000;
    controls.update( time - lastTime );
    renderer.render( scene, camera );
    lastTime = time;
    requestAnimationFrame( animation );
}
var car;
function initCar() {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('./assets/');
    mtlLoader.load('car4.mtl', function(materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('./assets/');
        objLoader.load('car4.obj', function(object) {
            car = object;
            car.children.forEach(function(item) {
                item.castShadow = true;
            });
            car.position.z = 20;
            car.position.x = 30;
            car.position.y = 0;

            scene.add(car);

        }, function() {
            console.log('progress');
        }, function() {
            console.log('error');
        });
    });
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
}
function threeStart() {
    initThree();
    initCamera();
    initScene();
    initLight();
    initControls();

    //initPlane();
    initGrid();
    
    modelScene();
    initCar();
    renderer.clear();
    animation();
    renderer.render(scene, camera);
}
