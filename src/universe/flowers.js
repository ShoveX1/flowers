/* ==========================================================================
   FLOWERS 3D - FLORES AMARILLAS Y EL GRAN RAMO CELESTIAL
   ========================================================================== */

import * as THREE from 'three';

// Materiales compartidos para alto rendimiento
const petalMaterialOuter = new THREE.MeshStandardMaterial({
  color: 0xFACC15, // Amarillo dorado brillante
  emissive: 0xCA8A04,
  emissiveIntensity: 0.35,
  roughness: 0.3,
  metalness: 0.1,
  side: THREE.DoubleSide
});

const petalMaterialInner = new THREE.MeshStandardMaterial({
  color: 0xFDE047, // Amarillo cálido claro
  emissive: 0xEAB308,
  emissiveIntensity: 0.4,
  roughness: 0.25,
  metalness: 0.15,
  side: THREE.DoubleSide
});

const centerMaterial = new THREE.MeshStandardMaterial({
  color: 0x451A03, // Marrón oscuro chocolate de girasol
  emissive: 0x78350F,
  emissiveIntensity: 0.2,
  roughness: 0.8,
  metalness: 0.1
});

const stemMaterial = new THREE.MeshStandardMaterial({
  color: 0x15803D, // Verde esmeralda natural
  roughness: 0.5,
  metalness: 0.1
});

/**
 * Crea la forma curvada de un pétalo realista de girasol
 */
function createPetalGeometry(length = 2.4, width = 0.65, curveZ = 0.25) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  // Curvas de Bézier simétricas para contorno de pétalo elegante
  shape.bezierCurveTo(width * 0.7, length * 0.3, width, length * 0.7, 0, length);
  shape.bezierCurveTo(-width, length * 0.7, -width * 0.7, length * 0.3, 0, 0);

  const geom = new THREE.ShapeGeometry(shape, 8);
  const pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    // Curvatura arqueada tridimensional
    pos.setZ(i, Math.sin((y / length) * Math.PI) * curveZ);
  }
  geom.computeVertexNormals();
  return geom;
}

const outerPetalGeom = createPetalGeometry(2.5, 0.7, 0.3);
const innerPetalGeom = createPetalGeometry(1.9, 0.55, 0.2);

/**
 * Construye un girasol 3D completo con cáliz, tallo y luz radiante
 */
export function createSunflower(scale = 1.0, options = {}) {
  const flowerGroup = new THREE.Group();

  // 1. Centro del girasol (disco abombado)
  const centerGeom = new THREE.CylinderGeometry(1.2, 1.0, 0.45, 24);
  const centerMesh = new THREE.Mesh(centerGeom, centerMaterial);
  centerMesh.rotation.x = Math.PI / 2;
  flowerGroup.add(centerMesh);

  // Semillas concéntricas doradas sutiles en el centro
  const coreGlowGeom = new THREE.SphereGeometry(0.75, 16, 16);
  const coreGlowMat = new THREE.MeshBasicMaterial({
    color: 0xF59E0B,
    transparent: true,
    opacity: 0.65
  });
  const coreGlow = new THREE.Mesh(coreGlowGeom, coreGlowMat);
  coreGlow.scale.set(1.2, 1.2, 0.4);
  flowerGroup.add(coreGlow);

  // 2. Capa Exterior de Pétalos (22 pétalos)
  const outerPetalCount = 22;
  const outerRing = new THREE.Group();
  for (let i = 0; i < outerPetalCount; i++) {
    const angle = (i / outerPetalCount) * Math.PI * 2;
    const petal = new THREE.Mesh(outerPetalGeom, petalMaterialOuter);
    petal.position.set(0, 0, -0.05);
    petal.rotation.z = angle;
    // Ligera inclinación hacia atrás
    petal.rotation.x = 0.12 + (Math.sin(i * 1.5) * 0.05);
    outerRing.add(petal);
  }
  flowerGroup.add(outerRing);

  // 3. Capa Interior de Pétalos (18 pétalos intercalados)
  const innerPetalCount = 18;
  const innerRing = new THREE.Group();
  for (let i = 0; i < innerPetalCount; i++) {
    const angle = (i / innerPetalCount) * Math.PI * 2 + (Math.PI / innerPetalCount);
    const petal = new THREE.Mesh(innerPetalGeom, petalMaterialInner);
    petal.position.set(0, 0, 0.08);
    petal.rotation.z = angle;
    // Inclinación hacia adelante
    petal.rotation.x = -0.08 + (Math.cos(i * 2) * 0.04);
    innerRing.add(petal);
  }
  flowerGroup.add(innerRing);

  // 4. Cáliz verde posterior y sépalos
  const calyxGeom = new THREE.ConeGeometry(1.1, 0.7, 16);
  const calyxMesh = new THREE.Mesh(calyxGeom, stemMaterial);
  calyxMesh.position.set(0, 0, -0.4);
  calyxMesh.rotation.x = -Math.PI / 2;
  flowerGroup.add(calyxMesh);

  // 5. Tallo sutil arqueado
  if (options.hasStem !== false) {
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0, -0.4),
      new THREE.Vector3(0, -1.5, -0.8),
      new THREE.Vector3(0.5, -3.5, -1.2),
      new THREE.Vector3(0.2, -6.0, -1.5)
    );
    const stemGeom = new THREE.TubeGeometry(curve, 20, 0.18, 8, false);
    const stemMesh = new THREE.Mesh(stemGeom, stemMaterial);
    flowerGroup.add(stemMesh);

    // Hoja verde
    const leafGeom = createPetalGeometry(2.0, 0.9, 0.2);
    const leafMesh = new THREE.Mesh(leafGeom, stemMaterial);
    leafMesh.position.set(0.3, -2.5, -1.0);
    leafMesh.rotation.set(0.4, 0.6, 1.2);
    leafMesh.scale.set(0.8, 0.8, 0.8);
    flowerGroup.add(leafMesh);
  }

  // 6. Luz cálida sutil en la flor
  const light = new THREE.PointLight(0xFACC15, 1.2, 18);
  light.position.set(0, 0, 1.0);
  flowerGroup.add(light);

  flowerGroup.scale.set(scale, scale, scale);

  return flowerGroup;
}

/**
 * Crea el GRAN RAMO CELESTIAL en el centro del universo
 */
export function createGrandBouquet() {
  const ringsGroup = new THREE.Group();

  // Envoltura o Lazo Dorado Cósmico (Anillos que enmarcan la flor central naciente)
  const ringGeom = new THREE.TorusGeometry(6.2, 0.14, 16, 64);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xFEF08A,
    emissive: 0xFACC15,
    emissiveIntensity: 0.5,
    metalness: 0.8,
    roughness: 0.2
  });
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.rotation.x = Math.PI / 2.3;
  ringsGroup.add(ring);

  // Segundo anillo cruzado estilo saturniano
  const ring2 = new THREE.Mesh(ringGeom, ringMat);
  ring2.rotation.x = -Math.PI / 2.8;
  ring2.rotation.y = 0.4;
  ring2.scale.set(1.18, 1.18, 1.18);
  ringsGroup.add(ring2);

  // Luz dorada sutil en el centro
  const centerLight = new THREE.PointLight(0xFACC15, 2.2, 35);
  ringsGroup.add(centerLight);

  return ringsGroup;
}

/**
 * Genera la lista de Planetas Flor y el Ramo central con sus metadatos
 */
export function createFlowerUniverse(scene) {
  const interactiveFlowers = [];
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });

  // Anillos cósmicos que rodean el centro del universo
  const grandBouquet = createGrandBouquet();
  grandBouquet.position.set(0, 0, 0);
  scene.add(grandBouquet);

  // 2. PLANETAS FLORES AMARILLAS EN ÓRBITA
  const celestialFlowersConfig = [
    {
      id: 'flower-1',
      title: 'Flor de la Resiliencia 🌻',
      scale: 1.3,
      radius: 24,
      angle: 0.3,
      y: 4,
      body: 'Un recordatorio rápido: cada tema difícil y cada parcial superado te acerca más a tu meta. ¡Tú puedes con esto!',
      author: 'Tu amigo'
    },
    {
      id: 'flower-2',
      title: 'Flor de la Vocación 💛',
      scale: 1.1,
      radius: 36,
      angle: 1.8,
      y: -6,
      body: 'Tienes la empatía y la paciencia necesarias para ser una gran psicóloga. Mucho éxito con tus materias.',
      author: 'Buena vibra siempre'
    },
    {
      id: 'flower-3',
      title: 'Girasol del Descanso 🌟',
      scale: 1.4,
      radius: 48,
      angle: 3.2,
      y: 8,
      body: 'Acuérdate de dormir bien y tomarte tus pausas. La salud mental también aplica para los que estudian psicología.',
      author: 'Tómate un respiro'
    },
    {
      id: 'flower-4',
      title: 'Margarita del Enfoque 🌼',
      scale: 1.0,
      radius: 60,
      angle: 4.6,
      y: -5,
      body: 'Confía en tu capacidad y en todo lo que vienes aprendiendo. ¡A romperla en este semestre!',
      author: 'Con todo'
    },
    {
      id: 'flower-5',
      title: 'Girasol de la Meta 🧠✨',
      scale: 1.25,
      radius: 72,
      angle: 5.7,
      y: 7,
      body: 'Menos estrés y más café. Vas por muy buen camino para sacar el título. ¡No te rindas jamás!',
      author: 'Tu amigo'
    }
  ];

  celestialFlowersConfig.forEach((cfg) => {
    const flowerGroup = createSunflower(cfg.scale);
    const x = Math.cos(cfg.angle) * cfg.radius;
    const z = Math.sin(cfg.angle) * cfg.radius;
    flowerGroup.position.set(x, cfg.y, z);

    // Orientar la flor mirando hacia afuera y ligeramente hacia arriba
    flowerGroup.lookAt(x * 1.5, cfg.y + 6, z * 1.5);
    flowerGroup.rotation.z += (Math.random() - 0.5) * 0.2;

    scene.add(flowerGroup);

    // Hitbox para clic y hover
    const hitGeom = new THREE.SphereGeometry(3.5 * cfg.scale, 12, 12);
    const hitMesh = new THREE.Mesh(hitGeom, hitMat);
    flowerGroup.add(hitMesh);

    const flowerObj = {
      id: cfg.id,
      title: cfg.title,
      date: '21 de Septiembre',
      type: 'flower',
      body: cfg.body,
      author: cfg.author,
      mesh: hitMesh,
      group: flowerGroup,
      orbitRadius: cfg.radius,
      orbitAngle: cfg.angle,
      orbitSpeed: 0.0012 / (cfg.radius * 0.04),
      y: cfg.y,
      scale: cfg.scale,
      targetPosition: flowerGroup.position,
      cameraOffset: new THREE.Vector3(x * 0.35, cfg.y + 2, z * 0.35).normalize().multiplyScalar(10)
    };

    hitMesh.userData = flowerObj;
    interactiveFlowers.push(flowerObj);
  });

  return {
    flowers: interactiveFlowers,
    grandBouquet,
    update: () => {
      // Rotación suave del gran bouquet central
      grandBouquet.rotation.y += 0.002;
      grandBouquet.rotation.x = Math.sin(Date.now() * 0.0008) * 0.05;

      // Órbita fluida de las flores alrededor del centro (sin girar como planetas sobre su eje)
      interactiveFlowers.forEach((f) => {
        if (f.type === 'flower' && f.group) {
          f.orbitAngle += f.orbitSpeed;
          const currentX = Math.cos(f.orbitAngle) * f.orbitRadius;
          const currentZ = Math.sin(f.orbitAngle) * f.orbitRadius;
          f.group.position.x = currentX;
          f.group.position.z = currentZ;
          f.group.position.y = f.y + Math.sin(Date.now() * 0.0012 + f.orbitRadius) * 0.8;

          // Mantener la cara de la flor orientada hacia afuera sin girar como un planeta
          f.group.lookAt(currentX * 1.5, f.y + 6, currentZ * 1.5);
          // Leve y sutil vaivén natural de flotación
          f.group.rotation.z += Math.sin(Date.now() * 0.001 + f.orbitRadius) * 0.04;
        }
      });
    }
  };
}
