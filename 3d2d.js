var renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true,
    alpha: true
});
renderer.setSize(window.innerWidth / 2.0, window.innerHeight / 2.0);
renderer.domElement.id = "canvas";
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.up.set(0, 0, 1);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
resetCameraPosition();

var scene = new THREE.Scene();

var material = new THREE.LineBasicMaterial({color: 0x000000});

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(geometry, material);
scene.add(line);

var geometry = new THREE.CircleGeometry(10, 64, Math.PI, Math.PI);
geometry.vertices.shift();
scene.add(new THREE.Line(geometry, material));

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

function resetCameraPosition() {
    camera.position.set(50, 50, 50);
    controls.update();
}

document.getElementById("camerareest").addEventListener("click", resetCameraPosition);
