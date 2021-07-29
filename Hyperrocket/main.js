import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.117.0/examples/jsm/controls/OrbitControls.js';
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';


//BASIC SCENE SETUP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//LIGHTS (POINT AND AMBIENT)
const pointLight = new THREE.PointLight(0xB7B7B7);
pointLight.position.set(-25, 0, 30);
const ambientLight = new THREE.AmbientLight(0xB7B7B7);
scene.add(pointLight, ambientLight);

//RESIZE WINDOW
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);

//ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 70;
controls.enablePan = false;
controls.enableRotate = false;
controls.enableZoom = false;
controls.target.set(0,0,-1);
camera.position.setZ(28);
var origPos = new THREE.Vector3().copy(camera.position);

//LOADERS
const loader = new THREE.TextureLoader
const partickle = loader.load('./particle2.png')
const coinS1 = loader.load('./HRBP.png')
const first = loader.load('./hyperrocketlogo2.jpg')

var loaderF = new THREE.FontLoader();
loaderF.load( 'https://threejs.org/examples/fonts/optimer_regular.typeface.json', function ( font ) {
    var geometry = new THREE.TextGeometry( 'HyperRocketbsc', {
        font: font,
        size: 2.4,
        height: 0.1,
        curveSegments: 15,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.31,
        bevelSegments: 7
    } );
    geometry.center();
    var material = new THREE.MeshLambertMaterial({color: 0x686868});
    var mesh = new THREE.Mesh( geometry, material );
    
    mesh.name = "bhText"
    scene.add( mesh );
    mesh.userData = { URL: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xfedfab9dcc1624fd325efed8dd16431b3416ec52"};
} );


// ****************************************************************************************************************//
//                                                                                                                 //
//                                                  SCENE OBJECTS                                                  //
//                                                                                                                 //
//*****************************************************************************************************************//



const minigeometry1 = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial1 = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("C1.png"),side: THREE.FrontSide});
const minicylinder1 = new THREE.Mesh(minigeometry1, minimaterial1);
minicylinder1.name = 'minicylinder1';
minicylinder1.position.x = -17.5;
minicylinder1.rotation.z = Math.PI / 2;
minicylinder1.rotation.y = Math.PI / 2;
scene.add(minicylinder1);

const minigeometry5S = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial5S = new THREE.MeshLambertMaterial({transparent: true});
const minicylinder5S = new THREE.Mesh(minigeometry5S, minimaterial5S);
minicylinder5S.name = 'minicylinder5S';
minicylinder5S.material.opacity = 1;
minicylinder5S.position.z = 17.5;
minicylinder5S.position.x = 11.5;
minicylinder5S.rotation.z = Math.PI / 2;
minicylinder5S.rotation.y = Math.PI / 2;
//scene.add(minicylinder5S);

const minigeometry2 = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial2 = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load("C2.png"),side: THREE.DoubleSide});
const minicylinder2 = new THREE.Mesh(minigeometry2, minimaterial2);
minicylinder2.name = 'minicylinder2';
minicylinder2.position.y = 8.5;
minicylinder2.rotation.z = Math.PI / 2;
minicylinder2.rotation.y = Math.PI / 2;
scene.add(minicylinder2);

const minigeometry3 = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial3 = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load("C3.png"),side: THREE.DoubleSide});
const minicylinder3 = new THREE.Mesh(minigeometry3, minimaterial3);
minicylinder3.name = 'minicylinder3';
minicylinder3.position.y = -8.5;
minicylinder3.rotation.z = Math.PI / 2;
minicylinder3.rotation.y = Math.PI / 2;
scene.add(minicylinder3);

const minigeometry4 = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial4 = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load("C4.png"),side: THREE.DoubleSide});
const minicylinder4 = new THREE.Mesh(minigeometry4, minimaterial4);
minicylinder4.name = 'minicylinder4';
minicylinder4.position.x = 17.5;
minicylinder4.rotation.z = Math.PI / 2;
minicylinder4.rotation.y = Math.PI / 2;
scene.add(minicylinder4);

const minigeometry5 = new THREE.CylinderGeometry(5, 5, 0.5, 50);
const minimaterial5 = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load("hyperrocketlogo2.jpg"),side: THREE.DoubleSide});
const minicylinder5 = new THREE.Mesh(minigeometry5, minimaterial5);
minicylinder5.name = 'minicylinder5';
minicylinder5.position.z = 7.5;
minicylinder5.position.x = 40;
minicylinder5.rotation.z = Math.PI / 2;
minicylinder5.rotation.y = Math.PI / 2;
// scene.add(minicylinder5);

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 18000;
const posArray = new Float32Array(particlesCnt * 3);

for (let i=0; i < particlesCnt * 3; i++) {
    posArray[i] = (1-(Math.random() *-.5) * (Math.random()*-15)) * 120
}
const pMaterial = new THREE.PointsMaterial({
    size: 0.3,
    map: partickle,
    transparent: true
})
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
const particlesMesh = new THREE.Points(particlesGeometry, pMaterial)
scene.add(particlesMesh);

// ****************************************************************************************************************//
//                                                                                                                 //
//                                                CAMERA ANIMATIONS                                                //
//                                                                                                                 //
//*****************************************************************************************************************//

//CAMERA MOVEMENT FUNCTION TOWARD EACH COIN//
function tweenCamera(finalPosition, tweenSpeed) {
    let initialPosition = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
    new TWEEN.Tween(initialPosition)
    .to(finalPosition, tweenSpeed)
    .onUpdate(() => {
        camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
    })
    //.easing(TWEEN.Easing.Cubic.Out)
    .start();
}

//TWEENS THE CAMERA BACK TO CENTER//

//WHERE THE CAMERA IS CURRENTLY LOOKING, I THINK
let currentTarget = new THREE.Vector3();
currentTarget.set(controls.target.x, controls.target.y, controls.target.z);

let originTarget =  new THREE.Vector3();
originTarget.set(0,0,0);

//TELLS CAMERA TO ORIENT TOWARD SPECIFIED OBJECT (target controls = camera orientation?)
let cylinderTarget = new THREE.Vector3();
cylinderTarget.set(0, 0, -10);
let minicylinder1Target = new THREE.Vector3();
minicylinder1Target.set(-28, minicylinder1.position.y, minicylinder1.position.z);
let minicylinder2Target = new THREE.Vector3();
minicylinder2Target.set(minicylinder2.position.x, 18, minicylinder2.position.z);
let minicylinder3Target = new THREE.Vector3();
minicylinder3Target.set(minicylinder3.position.x, -18, minicylinder3.position.z);
let minicylinder4Target = new THREE.Vector3();
minicylinder4Target.set(28, minicylinder4.position.y, minicylinder4.position.z);
let minicylinder5Target = new THREE.Vector3();
minicylinder5Target.set(minicylinder5.position.x, minicylinder5.position.y, minicylinder5.position.z);

// ****************************************************************************************************************//
//                                                                                                                 //
//                                                   MOUSE HOVER                                                   //
//                                                                                                                 //
//*****************************************************************************************************************//
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let coin1Hover = false;
let coin2Hover = false;
let coin3Hover = false;
let coin4Hover = false;

function onMouseMove(event) {
    mouse.x = (event.offsetX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    if ((getIndexInIntersectsArray(minicylinder1, intersects) > -1) && !coin1Hover) {
        coin1Hover = true;
        
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(Math.PI/2, 1.5*Math.PI/2);
        const spinning1 = new TWEEN.Tween(start).to(targ, 150).onUpdate(function() {minicylinder1.rotation.y = start.y});
        spinning1.start();
        return coin1Hover    
    } else if ((getIndexInIntersectsArray(minicylinder1, intersects) == -1) && coin1Hover) {
        coin1Hover = false;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.5*Math.PI/2, Math.PI/2);
        const backwards = new TWEEN.Tween(start).to(targ, 450).onUpdate(function() {minicylinder1.rotation.y = start.y});
        backwards.start();
        return coin1Hover
    } else if ((getIndexInIntersectsArray(minicylinder2, intersects) > -1) && !coin2Hover) {
        coin2Hover = true;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(Math.PI/2, 1.2*Math.PI/2);
        const spinning = new TWEEN.Tween(start).to(targ, 150).onUpdate(function() {minicylinder2.rotation.y = start.y});
        spinning.start();
        return coin2Hover
    } else if ((getIndexInIntersectsArray(minicylinder2, intersects) == -1) && coin2Hover) {
        coin2Hover = false;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.2*Math.PI/2, Math.PI/2);
        const backwards = new TWEEN.Tween(start).to(targ, 450).onUpdate(function() {minicylinder2.rotation.y = start.y});
        backwards.start();
        return coin2Hover
    } else if ((getIndexInIntersectsArray(minicylinder3, intersects) > -1) && !coin3Hover) {
        coin3Hover = true;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(Math.PI/2, 1.2*Math.PI/2);
        const spinning = new TWEEN.Tween(start).to(targ, 150).onUpdate(function() {minicylinder3.rotation.y = start.y});
        spinning.start();
        return coin3Hover
    } else if ((getIndexInIntersectsArray(minicylinder3, intersects) == -1) && coin3Hover) {
        coin3Hover = false;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.2*Math.PI/2, Math.PI/2);
        const backwards = new TWEEN.Tween(start).to(targ, 450).onUpdate(function() {minicylinder3.rotation.y = start.y});
        backwards.start();
        return coin3Hover
    } else if ((getIndexInIntersectsArray(minicylinder4, intersects) > -1) && !coin4Hover) {
        coin4Hover = true;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(Math.PI/2, 1.2*Math.PI/2);
        const spinning = new TWEEN.Tween(start).to(targ, 150).onUpdate(function() {minicylinder4.rotation.y = start.y});
        spinning.start();
        return coin4Hover
    } else if ((getIndexInIntersectsArray(minicylinder4, intersects) == -1) && coin4Hover) {
        coin4Hover = false;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.2*Math.PI/2, Math.PI/2);
        const backwards = new TWEEN.Tween(start).to(targ, 450).onUpdate(function() {minicylinder4.rotation.y = start.y});
        backwards.start();
        return coin4Hover
    }
    
    function getIndexInIntersectsArray(elem, array) {
        var ind = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i].object.name == elem.name) {
                ind = i;
            }
        }
        return ind;
    }
}

// ****************************************************************************************************************//
//                                                                                                                 //
//                                                   MOUSE CLICK                                                   //
//                                                                                                                 //
//*****************************************************************************************************************//
//THIS DETERMINES WHETHER WE ARE ZOOMING IN TO, OR OUT OF, OUR SELECTION
let coin1Clicked = false;
let coin2Clicked = false;
let coin3Clicked = false;
let coin4Clicked = false;
let coin5Clicked = false;

function onClick(event) {
    //Normalized mouse coordinates (-1, +1)
    mouse.x = (event.offsetX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    if ((getIndexInIntersectsArray(scene.getObjectByName('bhText'), intersects) > -1)) {
        window.open(scene.getObjectByName('bhText').userData.URL);
    }
    
    //IF WE CLICK ON AN OBJECT, WE WILL ZOOM INTO IT
    if ((getIndexInIntersectsArray(minicylinder1, intersects) > -1) && (!coin1Clicked)) {
        tl.to(".slide1", {delay: 2.1,duration: 0.7, clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)'});
        // minicylinder1.material.transparent = true;
        // minicylinder1.material.opacity = 1;
        coin1Clicked = true;
        //CODE THAT ACHIEVES MY SLIGHT ROTATION THAT I FOUND ON STACKOVERFLOW
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.5*Math.PI/2, 4.3*Math.PI);
        const spun1 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder1.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
        spun1.start();
        window.removeEventListener("mousemove", onMouseMove);
        new TWEEN.Tween(currentTarget)
            .to(minicylinder1Target, 2500)
            .onUpdate(function() {
                controls.target = currentTarget; 
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start()
        //RESTRICT CAMERA ROTATION AND ZOOM OUT
        tweenCamera(new THREE.Vector3(-28, minicylinder1.position.y, 7), 2500)
        return coin1Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder1, intersects) > -1) && (coin1Clicked)) {
        tl.to(".slide1", {duration: 0.7, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'});
        // minicylinder1.material.transparent = false;
        //CODE THAT ACHIEVES MY SLIGHT ROTATION THAT I FOUND ON STACKOVERFLOW
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(4.3*Math.PI, 4.5*Math.PI);
        const spun1 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder1.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
        spun1.start();
        //TWEEN TO ORIENT CAMERA TOWARDS ORIGIN
        new TWEEN.Tween(currentTarget)
            .to(cylinderTarget, 2500)
            .onUpdate(function() {
                controls.target = currentTarget; 
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start()
        coin1Clicked = false;
        tweenCamera(origPos, 2500) //FOR THE TEXT ELEMENTS ALSO
        window.addEventListener("mousemove", onMouseMove);
        return coin1Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder2, intersects) > -1) && !coin2Clicked) {
        tl.to(".slide2", {delay: 2.1,duration: 0.7, clipPath: 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'});
        // minicylinder2.material.transparent = true;
        // minicylinder2.material.opacity = 1;
        coin2Clicked = true;
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
                
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.5*Math.PI/2, 4.5*Math.PI);
        const spun2 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder2.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
        spun2.start();
        new TWEEN.Tween(currentTarget)
            .to(minicylinder2Target, 2500)
            .onUpdate(function() {
                controls.target = currentTarget; 
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start()
        tweenCamera(new THREE.Vector3(minicylinder2.position.x, 18, 7), 2500)
        window.removeEventListener("mousemove", onMouseMove);
        return coin2Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder2, intersects) > -1) && (coin2Clicked)) {
        tl.to(".slide2", {duration: 0.7, clipPath: 'polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)'});
        // minicylinder2.material.transparent = false;
        new TWEEN.Tween(currentTarget)
        .to(cylinderTarget, 2500)
        .onUpdate(function() {
            controls.target = currentTarget; 
        })
        .easing(TWEEN.Easing.Quartic.InOut)
        .start()
        new TWEEN.Tween(minicylinder1.position)
        .to({y:0}, 1200)
        .onUpdate(() => {
            minicylinder1;
        })
        .start();
        new TWEEN.Tween(minicylinder4.position)
        .to({y:0}, 1200)
        .onUpdate(() => {
            minicylinder4;
        })
        .start();
        coin2Clicked = false;
        tweenCamera(origPos, 2500);
        window.addEventListener("mousemove", onMouseMove);
        return coin2Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder3, intersects) > -1) && !coin3Clicked) {
        tl.to(".slide3", {delay: 2.1,duration: 0.7, clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)'});
        // minicylinder3.material.transparent = true;
        // minicylinder3.material.opacity = 1;
        coin3Clicked = true;
        //CODE THAT ACHIEVES MY SLIGHT ROTATION THAT I FOUND ON STACKOVERFLOW
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.5*Math.PI/2, 4.5*Math.PI);
        const spun3 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder3.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
        spun3.start();
        window.removeEventListener("mousemove", onMouseMove);
        new TWEEN.Tween(currentTarget)
            .to(minicylinder3Target, 2500)
            .onUpdate(function() {
                controls.target = currentTarget; 
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start()
        new TWEEN.Tween(minicylinder1.position)
            .to({y:5}, 1200)
            .delay(1500)
            .onUpdate(() => {
            minicylinder1;
            })
            .start();
        new TWEEN.Tween(minicylinder4.position)
            .to({y:5}, 1200)
            .delay(1500)
            .onUpdate(() => {
                minicylinder4;
            })
            .start();
        tweenCamera(new THREE.Vector3(minicylinder3.position.x, -18, 7), 2500)
        return coin3Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder3, intersects) > -1) && coin3Clicked) {
        tl.to(".slide3", {duration: 0.7, clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)'});
        // minicylinder3.material.transparent = false;
        new TWEEN.Tween(currentTarget)
        .to(cylinderTarget, 2500)
        .onUpdate(function() {
            controls.target = currentTarget; 
        })
        .easing(TWEEN.Easing.Quartic.InOut)
        .start()
        new TWEEN.Tween(minicylinder1.position)
        .to({y:0}, 1200)
        .onUpdate(() => {
            minicylinder1;
        })
        .start();
        new TWEEN.Tween(minicylinder4.position)
        .to({y:0}, 1200)
        .onUpdate(() => {
            minicylinder4;
        })
        .start();
        coin3Clicked = false;
        tweenCamera(origPos, 2500);
        window.addEventListener("mousemove", onMouseMove);
        return coin3Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder4, intersects) > -1) && !coin4Clicked) {
        tl.to(".slide4", {delay: 2.1,duration: 0.7, clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)'});
        // minicylinder4.material.transparent = true;
        // minicylinder4.material.opacity = 1;
        coin4Clicked = true;
        //CODE THAT ACHIEVES MY SLIGHT ROTATION THAT I FOUND ON STACKOVERFLOW
        var start = {}
        start.y = 0;
        var targ = {};
        targ.y = 0;
        
        function rot(s,t) {
            start["y"] = s;
            targ["y"] = t;
        }  
        rot(1.5*Math.PI/2, 4.6*Math.PI);
        const spun4 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder4.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
        spun4.start();
        window.removeEventListener("mousemove", onMouseMove);
        new TWEEN.Tween(currentTarget)
        .to(minicylinder4Target, 2500)
        .onUpdate(function() {
            controls.target = currentTarget; 
        })
        .easing(TWEEN.Easing.Quartic.InOut)
        .start()
        
        tweenCamera(new THREE.Vector3(28, minicylinder4.position.y, 7), 2500)
        return coin4Clicked;
    } else if ((getIndexInIntersectsArray(minicylinder4, intersects) > -1) && (coin4Clicked)) {
        tl.to(".slide4", {duration: 0.7, clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)'});
        // minicylinder4.material.transparent = false;
        new TWEEN.Tween(currentTarget)
            .to(cylinderTarget, 2500)
            .onUpdate(function() {
                controls.target = currentTarget; 
            })
            .easing(TWEEN.Easing.Quartic.InOut)
            .start()
        coin4Clicked = false;
        tweenCamera(origPos, 2500);
        window.addEventListener("mousemove", onMouseMove);
        return coin4Clicked;
    }
}
function getIndexInIntersectsArray(elem, array) {
    var ind = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i].object.name == elem.name) {
            ind = i;
        }
    }
    return ind;
}
    
window.addEventListener("click", (event) => {
    onClick(event);
})
window.addEventListener("mousemove", onMouseMove);
    
var animate = function() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y -= 0.00035;
    controls.update();
    render();
    TWEEN.update();        
};
    
function render() {
    renderer.render(scene, camera);
}
    
animate();









// ****************************************************************************************************************//
//                                                                                                                 //
//                                                       END                                                       //
//                                                                                                                 //
// *****************************************************************************************************************//



//     ITEMS NO LONGER IN USE BUT MIGHT NEED
    
//     TEXT BOX
//     const textGeometry1 = new THREE.BoxGeometry(8.5, 8.5, 0.01);
//     const textMaterial1 = new THREE.MeshStandardMaterial({map:coinS1, transparent: true});
//     const textBP1 = new THREE.Mesh(textGeometry1, textMaterial1);
//     textBP1.name = 'textBP1'
//     textBP1.position.x = -15;
//     textBP1.material.opacity = 0;
//     scene.add(textBP1)
    
//     BIG COIN MAIN LOGO
//     const geometry = new THREE.CylinderGeometry( 13, 13, 1, 100);
//     const material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("hyperrocketlogo.jpg"),side: THREE.DoubleSide});
//     const cylinder = new THREE.Mesh(geometry, material);
//     cylinder.name = 'coin'
//     cylinder.position.y = 15;
//     cylinder.position.z = -10;
//     cylinder.rotation.z = Math.PI/2;
//     cylinder.rotation.y = Math.PI/2;
//     scene.add(cylinder);
//     cylinder.userData = { URL: "http://google.com"};


//     IF STATEMENT FOR 5TH COIN THAT IS NO LONGER IN THE SCENE//
//     else if ((getIndexInIntersectsArray(minicylinder5, intersects) > -1) && (!coin5Clicked)) {
//         minicylinder5.material.transparent = true;
//         minicylinder5.material.opacity = 1;
//         coin5Clicked = true;
//         window.removeEventListener("mousemove", onMouseMove);
//         new TWEEN.Tween(currentTarget)
//             .to(minicylinder5Target, 2500)
//             .onUpdate(function() {
//                 controls.target = currentTarget; 
//             })
//             .easing(TWEEN.Easing.Quartic.InOut)
//             .start()
//         tweenCamera(new THREE.Vector3(minicylinder5.position.x, minicylinder5.position.y, 25), 2500)
//         //CODE THAT ACHIEVES MY SLIGHT ROTATION THAT I FOUND ON STACKOVERFLOW
//         var start = {}
//         start.y = 0;
//         var targ = {};
//         targ.y = 0;
        
//         function rot(s,t) {
//             start["y"] = s;
//             targ["y"] = t;
//         }  
//         rot(1.5*Math.PI/2, 4.5*Math.PI);
//         const spun5 = new TWEEN.Tween(start).to(targ, 2500).onUpdate(function() {minicylinder5.rotation.y = start.y}).easing(TWEEN.Easing.Quintic.Out);
//         spun5.start();
//         new TWEEN.Tween(minicylinder5.material)
//             .to({opacity: 0}, 500)
//             .delay(800)
//             .onUpdate(function() {
//                 minicylinder5.material})
//             .start();        
//         return coin5Clicked;
//         }  else if ((getIndexInIntersectsArray(minicylinder5, intersects) > -1) && (coin5Clicked)) {
//             minicylinder5.material.transparent = false;
//             coin5Clicked = false;
//             new TWEEN.Tween(currentTarget)
//                 .to(cylinderTarget, 2500)
//                 .onUpdate(function() {
//                     controls.target = currentTarget; 
//                 })
//                 .easing(TWEEN.Easing.Quartic.InOut)
//                 .start()
//             tweenCamera(origPos, 2500);
//             return coin5Clicked;
//         }