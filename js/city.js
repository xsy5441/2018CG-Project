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

    camera.lookAt({
        x : 0,
        y : 3,
        z : 10
    });
    camera.position.y = 5;
}

var scene;
function initScene() {
    scene = new THREE.Scene();
    //增加雾化效果
    scene.fog = new THREE.FogExp2( 0xd0e0f0, 0.0025 );
}

var light;
function initLight() {
    //半球光（天空色，地面色，光强）
    light = new THREE.HemisphereLight( 0xb2f8fa, 0x101020, 1.25 );
    light.position.set( 0.75, 1, 0.25 );
    scene.add( light );
}

var controls;
//视角是自由的还是固定在驾驶位
var isInCar=true;
//在firstpersoncontrol中用来控制是否用鼠标
var isMouse=true;

var car_position=new THREE.Vector3(0,0,0)
var rspeed=0.5;
function initCameraControls(){
    controls = new THREE.FirstPersonControls( camera );
    controls.movementSpeed = 10;
    controls.lookSpeed = 0.05;
    if(!isInCar) {
        camera.position.y = 50;
        controls.lookVertical = true;
    }
    else{
        camera.position.set(0,3,49);
        isMouse=false;
        //controls.lon=90;
        controls.lookVertical=false;
    }
}

var plane;
function initPlane(){
    plane = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500 ), new THREE.MeshBasicMaterial( { color: 0x101018 } ) );
    plane.rotation.x = - 90 * Math.PI / 180;
    plane.position.set(0,0,0);
    scene.add( plane );
}

var isGrid=true;
function initGrid(){
    var helper = new THREE.GridHelper( 1000, 50 );
    helper.setColors( 0x0000ff, 0x808080 );
    scene.add( helper );
}

function animation() {
    var time = performance.now() / 1000;
    controls.update( time - lastTime );
    renderer.render( scene, camera );
    lastTime = time;
    requestAnimationFrame( animation );
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
    initCameraControls();
    initPlane();
    modelScene();
    //initRoad();
    if(isGrid)
        initGrid();
    initCar();
    renderer.clear();
    animation();
}