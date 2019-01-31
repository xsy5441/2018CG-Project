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
var plane;
function initPlane(){
    plane = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshBasicMaterial( { color: 0x101018 } ) );
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

var path;
var loader;
function ObjLoader(){
      loader=new THREE.OBJLoader();
      loader.load('model/obj/teachhall.obj',function(object){
          object.traverse(function (child) {
              if ( child instanceof THREE.Mesh ) {
                  child.material.map = texture;
              }

          });
          object.position.y=95;
          scene.add(object);
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
    initPlane();
    ObjLoader();
    renderer.clear();
    animation();
    renderer.render(scene, camera);
}