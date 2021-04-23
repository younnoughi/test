const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer(

)

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(devicePixelRatio)

document.body.appendChild(renderer.domElement)

camera.position.z = 10

scene.background =0xddd

const planeGeometry = new THREE.PlaneGeometry(5,5,10,10)
const planeMaterial = new THREE.MeshPhongMaterial({color:0xff0000, side: THREE.DoubleSide})
const planemesh = new THREE.Mesh(planeGeometry , planeMaterial)

const planeGeometry2 = new THREE.PlaneGeometry(5,5,10,10)
const planeMaterial2 = new THREE.MeshPhongMaterial({color:0x000000, side: THREE.DoubleSide})
const planemesh2 = new THREE.Mesh(planeGeometry , planeMaterial)

planemesh2.rotation.x = 90




const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0,0, 1)


scene.add(planemesh)
scene.add(light)
scene.add(planemesh2)
function animate()
{
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

    planemesh.rotation.x += 0.1
    planemesh2.rotation.x += 0.1
}



animate()