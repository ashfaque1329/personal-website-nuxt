<template>
  <div id="three-container" class="three-container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let objects: THREE.Mesh[] = []
let animationId: number | null = null

const initThree = () => {
  const container = document.getElementById('three-container')
  if (!container) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 35

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  const geometries = [
    new THREE.TorusGeometry(3.5, 1.2, 32, 64),
    new THREE.SphereGeometry(2.8, 32, 32),
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.OctahedronGeometry(2.5),
    new THREE.DodecahedronGeometry(2.2),
    new THREE.IcosahedronGeometry(2.0),
  ]

  const colors = [0x20b2aa, 0x48c9c0, 0x7dd9d0, 0xb2ebe4, 0x0d5c5a, 0x4ecdc4]

  const positions = [
    { x: -18, y: 12, z: -20 }, { x: 18, y: 12, z: -25 },
    { x: -18, y: -12, z: -30 }, { x: 18, y: -12, z: -22 },
    { x: 0, y: 15, z: -35 }, { x: 0, y: -15, z: -28 },
    { x: -20, y: 0, z: -18 }, { x: 20, y: 0, z: -32 },
    { x: 0, y: 0, z: -40 },
  ]

  positions.forEach((pos, i) => {
    const geoIndex = i % geometries.length
    const colorIndex = i % colors.length

    const mat = new THREE.MeshPhongMaterial({
      color: colors[colorIndex],
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      emissive: colors[colorIndex],
      emissiveIntensity: 0.06,
    })

    const mesh = new THREE.Mesh(geometries[geoIndex], mat)
    mesh.position.set(pos.x, pos.y, pos.z)
    const scale = 1.8 + Math.random() * 1.2
    mesh.scale.set(scale, scale, scale)

    mesh.userData = {
      rotX: 0.005 + Math.random() * 0.015,
      rotY: 0.005 + Math.random() * 0.015,
      floatSpeed: 0.3 + Math.random() * 0.5,
      floatAmount: 0.3 + Math.random() * 0.5,
      initialX: pos.x,
      initialY: pos.y,
    }
    scene.add(mesh)
    objects.push(mesh)
  })

  const light1 = new THREE.DirectionalLight(0x20b2aa, 0.3)
  light1.position.set(10, 10, 10)
  scene.add(light1)

  const light2 = new THREE.DirectionalLight(0x48c9c0, 0.2)
  light2.position.set(-10, -5, 10)
  scene.add(light2)

  const ambient = new THREE.AmbientLight(0x404040, 0.2)
  scene.add(ambient)

  window.addEventListener('resize', handleResize)
  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  const time = Date.now() * 0.001

  objects.forEach((obj, index) => {
    obj.rotation.x += obj.userData.rotX
    obj.rotation.y += obj.userData.rotY

    const floatOffset = Math.sin(time * obj.userData.floatSpeed + index) * obj.userData.floatAmount
    obj.position.y = obj.userData.initialY + floatOffset * 0.3
    obj.position.x = obj.userData.initialX + Math.cos(time * obj.userData.floatSpeed * 0.7 + index) * 0.2
  })

  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const cleanup = () => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }
  window.removeEventListener('resize', handleResize)

  // ✅ FIXED: Properly dispose materials and geometries
  objects.forEach((obj) => {
    scene.remove(obj)
    obj.geometry.dispose()

    // ✅ Handle both single material and material array
    if (Array.isArray(obj.material)) {
      obj.material.forEach((mat: THREE.Material) => mat.dispose())
    } else {
      obj.material.dispose()
    }
  })
  objects = []
}

onMounted(() => initThree())
onUnmounted(() => cleanup())
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background: transparent;
}
</style>