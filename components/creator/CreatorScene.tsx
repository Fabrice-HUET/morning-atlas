'use client'

import { useEffect, useRef, useState } from 'react'

type SceneStatus = 'loading' | 'ready' | 'fallback'

function canUseWebGl() {
  const canvas = document.createElement('canvas')

  return Boolean(canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl'))
}

export function CreatorScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sceneStatus, setSceneStatus] = useState<SceneStatus>('loading')

  useEffect(() => {
    let isDisposed = false
    let cleanup: (() => void) | undefined

    async function initScene() {
      if (!containerRef.current || !canUseWebGl()) {
        window.setTimeout(() => setSceneStatus('fallback'), 0)
        return
      }

      const THREE = await import('three')

      if (isDisposed || !containerRef.current) {
        return
      }

      const container = containerRef.current
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      const group = new THREE.Group()

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      camera.position.set(4.2, 3.2, 6.2)
      camera.lookAt(0, 0.6, 0)

      scene.add(new THREE.AmbientLight(0xfff3df, 2.1))

      const keyLight = new THREE.DirectionalLight(0xffd19a, 2.4)
      keyLight.position.set(3, 5, 4)
      scene.add(keyLight)

      const fillLight = new THREE.DirectionalLight(0xa47864, 1.1)
      fillLight.position.set(-4, 2, -2)
      scene.add(fillLight)

      const desk = new THREE.Mesh(
        new THREE.BoxGeometry(4.4, 0.22, 2.25),
        new THREE.MeshStandardMaterial({ color: 0xc9895b, roughness: 0.72 }),
      )
      desk.position.y = -0.52
      group.add(desk)

      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(1.65, 1.05, 0.08),
        new THREE.MeshStandardMaterial({ color: 0x3a241c, roughness: 0.45 }),
      )
      screen.position.set(-0.45, 0.18, -0.38)
      group.add(screen)

      const screenGlow = new THREE.Mesh(
        new THREE.BoxGeometry(1.42, 0.82, 0.04),
        new THREE.MeshStandardMaterial({ color: 0xfff6ea, emissive: 0xe7a93b, emissiveIntensity: 0.2 }),
      )
      screenGlow.position.set(-0.45, 0.18, -0.33)
      group.add(screenGlow)

      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.55, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x6d4938, roughness: 0.6 }),
      )
      stand.position.set(-0.45, -0.38, -0.38)
      group.add(stand)

      const notebook = new THREE.Mesh(
        new THREE.BoxGeometry(1.15, 0.07, 0.78),
        new THREE.MeshStandardMaterial({ color: 0xfffdf8, roughness: 0.8 }),
      )
      notebook.position.set(0.82, -0.32, 0.16)
      notebook.rotation.y = -0.25
      group.add(notebook)

      const cup = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.18, 0.42, 18),
        new THREE.MeshStandardMaterial({ color: 0xfff6ea, roughness: 0.55 }),
      )
      cup.position.set(1.45, -0.22, -0.48)
      group.add(cup)

      const coffee = new THREE.Mesh(
        new THREE.CylinderGeometry(0.17, 0.17, 0.02, 18),
        new THREE.MeshStandardMaterial({ color: 0x3a241c, roughness: 0.5 }),
      )
      coffee.position.set(1.45, 0, -0.48)
      group.add(coffee)

      const croissant = new THREE.Mesh(
        new THREE.TorusGeometry(0.34, 0.11, 12, 34, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0xe7a93b, roughness: 0.74 }),
      )
      croissant.position.set(0.62, -0.2, -0.72)
      croissant.rotation.set(Math.PI / 2, 0.2, 0.12)
      group.add(croissant)

      const globe = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 18, 12),
        new THREE.MeshStandardMaterial({ color: 0x8fae8b, roughness: 0.68 }),
      )
      globe.position.set(-1.52, -0.18, 0.38)
      group.add(globe)

      const globeBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.22, 0.1, 18),
        new THREE.MeshStandardMaterial({ color: 0x6d4938, roughness: 0.6 }),
      )
      globeBase.position.set(-1.52, -0.48, 0.38)
      group.add(globeBase)

      const person = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.18, 0.48, 4, 8),
        new THREE.MeshStandardMaterial({ color: 0xa47864, roughness: 0.72 }),
      )
      person.position.set(-0.2, -0.12, 0.7)
      person.rotation.x = -0.22
      group.add(person)

      scene.add(group)

      function resize() {
        if (!containerRef.current) {
          return
        }

        const { width, height } = containerRef.current.getBoundingClientRect()
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(container)
      resize()

      let animationFrameId = 0

      function animate() {
        group.rotation.y = Math.sin(Date.now() * 0.00045) * 0.16
        group.rotation.x = Math.sin(Date.now() * 0.00035) * 0.025
        renderer.render(scene, camera)
        animationFrameId = window.requestAnimationFrame(animate)
      }

      animate()
      setSceneStatus('ready')

      cleanup = () => {
        window.cancelAnimationFrame(animationFrameId)
        resizeObserver.disconnect()
        renderer.dispose()
        container.removeChild(renderer.domElement)

        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()

            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }
    }

    initScene().catch(() => {
      window.setTimeout(() => setSceneStatus('fallback'), 0)
    })

    return () => {
      isDisposed = true
      cleanup?.()
    }
  }, [])

  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-oat bg-paper shadow-xl shadow-espresso/10">
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-500 ${sceneStatus === 'ready' ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
      {sceneStatus !== 'ready' ? (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top,#fff6ea,transparent_55%),linear-gradient(135deg,#e8d8c3,#fffdf8)] p-8">
          <div className="rounded-3xl border border-toast/30 bg-cream/80 p-6 text-center shadow-sm">
            <p className="text-5xl" aria-hidden="true">
              🥐
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-mocha">Bureau Morning Atlas</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-espresso/75">
              Illustration de repli : un espace de travail éditorial, entre carnet, café et exploration culinaire.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
