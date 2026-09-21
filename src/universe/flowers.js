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
  const bouquet = new THREE.Group();

  // Flor principal reina en la cima
  const mainFlower = createSunflower(1.5, { hasStem: false });
  mainFlower.position.set(0, 1.2, 0);
  bouquet.add(mainFlower);

  // Corona de 8 flores rodeándola
  const count = 8;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const flower = createSunflower(1.05, { hasStem: false });
    const radius = 2.8;
    flower.position.set(
      Math.cos(angle) * radius,
      0.3 + Math.sin(i * 2) * 0.4,
      Math.sin(angle) * radius
    );
    // Orientar hacia afuera
    flower.rotation.x = Math.sin(angle) * 0.6;
    flower.rotation.y = -Math.cos(angle) * 0.6;
    bouquet.add(flower);
  }

  // Capa inferior de 6 flores más
  for (let j = 0; j < 6; j++) {
    const angle = (j / 6) * Math.PI * 2 + 0.5;
    const flower = createSunflower(0.85, { hasStem: false });
    const radius = 4.2;
    flower.position.set(
      Math.cos(angle) * radius,
      -1.4,
      Math.sin(angle) * radius
    );
    flower.rotation.x = Math.sin(angle) * 0.9;
    flower.rotation.y = -Math.cos(angle) * 0.9;
    bouquet.add(flower);
  }

  // Envoltura o Lazo Dorado Cósmico (Anillo helicoidal)
  const ringGeom = new THREE.TorusGeometry(5.2, 0.12, 16, 64);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xFEF08A,
    emissive: 0xFACC15,
    emissiveIntensity: 0.6,
    metalness: 0.8,
    roughness: 0.2
  });
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.rotation.x = Math.PI / 2.3;
  bouquet.add(ring);

  // Segundo anillo cruzado estilo saturniano
  const ring2 = new THREE.Mesh(ringGeom, ringMat);
  ring2.rotation.x = -Math.PI / 2.8;
  ring2.rotation.y = 0.4;
  ring2.scale.set(1.2, 1.2, 1.2);
  bouquet.add(ring2);

  // Luz dorada poderosa en el centro del ramo
  const centerLight = new THREE.PointLight(0xFACC15, 3.5, 45);
  bouquet.add(centerLight);

  return bouquet;
}

/**
 * Genera la lista de Planetas Flor y el Ramo central con sus metadatos
 */
export function createFlowerUniverse(scene) {
  const interactiveFlowers = [];

  // 1. EL GRAN RAMO CENTRAL (Foco central del cosmos)
  const grandBouquet = createGrandBouquet();
  grandBouquet.position.set(0, 0, 0);
  scene.add(grandBouquet);

  // Caja de colisión invisible para facilitar clic en el ramo
  const bouquetHitGeom = new THREE.SphereGeometry(5.5, 16, 16);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const bouquetHit = new THREE.Mesh(bouquetHitGeom, hitMat);
  grandBouquet.add(bouquetHit);

  const bouquetData = {
    id: 'flower-grand-bouquet',
    title: 'El Gran Ramo Celestial 🌻👑',
    date: '21 de Septiembre — Día de las Flores Amarillas',
    type: 'bouquet',
    body: 'Este ramo infinito reúne millones de destellos dorados del cosmos. Dicen que regalar flores amarillas es regalar luz, alegría pura y la promesa de permanecer juntos en cada primavera de la vida.',
    author: 'El Universo Entero Para Ti ✨',
    mesh: bouquetHit,
    targetPosition: new THREE.Vector3(0, 0, 0),
    cameraOffset: new THREE.Vector3(0, 4, 15)
  };
  bouquetHit.userData = bouquetData;
  interactiveFlowers.push(bouquetData);

  // 2. PLANETAS FLORES AMARILLAS EN ÓRBITA
  const celestialFlowersConfig = [
    {
      id: 'flower-1',
      title: 'Girasol de la Esperanza 🌻',
      scale: 1.3,
      radius: 24,
      angle: 0.3,
      y: 4,
      body: 'Así como el girasol nunca deja de buscar al sol, mi corazón siempre encuentra su dirección hacia ti. Gracias por ser esa luz cálida que ilumina cualquier día gris.',
      author: 'Con admiración infinita'
    },
    {
      id: 'flower-2',
      title: 'Flor de la Alegría Eterna 💛',
      scale: 1.1,
      radius: 36,
      angle: 1.8,
      y: -6,
      body: 'El amarillo es el color de tu risa, de los días soleados a tu lado y de los recuerdos felices que guardo como el tesoro más preciado de este universo.',
      author: 'Por siempre tu refugio'
    },
    {
      id: 'flower-3',
      title: 'Girasol del Amor Radiante 🌟',
      scale: 1.4,
      radius: 48,
      angle: 3.2,
      y: 8,
      body: 'Te regalo estas flores no solo para cumplir una tradición, sino para recordarte lo extraordinario que es coincidir contigo en esta inmensidad del tiempo y el espacio.',
      author: 'De quien más te quiere'
    },
    {
      id: 'flower-4',
      title: 'Margarita de la Paz Dorada 🌼',
      scale: 1.0,
      radius: 60,
      angle: 4.6,
      y: -5,
      body: 'Que la serenidad y la dulzura de estos pétalos amarillos te acompañen en cada paso. Eres magia, calma y primavera viva.',
      author: 'Un suspiro cósmico'
    },
    {
      id: 'flower-5',
      title: 'Girasol de los Sueños Cumplidos ✨',
      scale: 1.25,
      radius: 72,
      angle: 5.7,
      y: 7,
      body: 'Que cada pétalo de este universo sea un deseo que florece para ti. Mereces todos los cielos despejados y todos los soles del mundo.',
      author: 'Para la persona más especial'
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
