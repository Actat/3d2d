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

draw();
animate();
document.getElementById("camerareest").addEventListener("click", resetCameraPosition);
document.getElementById("redraw").addEventListener("click", draw);

function draw() {
    scene = new THREE.Scene();

    var arrowHelperX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0).normalize(), new THREE.Vector3(0, 0, 0), 10, 0x000000, 2);
    var arrowHelperY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0).normalize(), new THREE.Vector3(0, 0, 0), 10, 0x000000, 2);
    var arrowHelperZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1).normalize(), new THREE.Vector3(0, 0, 0), 10, 0x000000, 2);
    scene.add(arrowHelperX);
    scene.add(arrowHelperY);
    scene.add(arrowHelperZ);

    eval(document.form.textarea.value);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function resetCameraPosition() {
    camera.position.set(50, 50, 50);
    controls.update();
}
