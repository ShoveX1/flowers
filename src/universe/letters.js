/* ==========================================================================
   LETTERS 3D - CARTAS Y SOBRES CELESTIALES FLOTANTES
   ========================================================================== */

import * as THREE from 'three';

// Materiales para el sobre y sello
const paperMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFBEB, // Marfil / crema elegante
  roughness: 0.6,
  metalness: 0.05
});

const paperBorderMaterial = new THREE.MeshStandardMaterial({
  color: 0xFACC15, // Filo dorado
  emissive: 0xCA8A04,
  emissiveIntensity: 0.3,
  roughness: 0.2,
  metalness: 0.8
});

const waxSealMaterial = new THREE.MeshStandardMaterial({
  color: 0x991B1B, // Lacre rojo carmín noble
  emissive: 0x7F1D1D,
  emissiveIntensity: 0.25,
  roughness: 0.35,
  metalness: 0.2
});

const goldInsigniaMaterial = new THREE.MeshStandardMaterial({
  color: 0xFEF08A,
  emissive: 0xFACC15,
  emissiveIntensity: 0.6,
  roughness: 0.2,
  metalness: 0.9
});

/**
 * Crea un sobre 3D con solapa, borde dorado y sello de cera
 */
export function createLetterMesh(scale = 1.0) {
  const envelope = new THREE.Group();

  // 1. Cuerpo del sobre (caja delgada)
  const bodyGeom = new THREE.BoxGeometry(3.2, 2.2, 0.12);
  const body = new THREE.Mesh(bodyGeom, paperMaterial);
  envelope.add(body);

  // 2. Ribete dorado alrededor
  const borderGeom = new THREE.BoxGeometry(3.28, 2.28, 0.08);
  const border = new THREE.Mesh(borderGeom, paperBorderMaterial);
  border.position.z = -0.03;
  envelope.add(border);

  // 3. Solapa triangular frontal
  const flapShape = new THREE.Shape();
  flapShape.moveTo(-1.6, 1.1);
  flapShape.lineTo(1.6, 1.1);
  flapShape.lineTo(0, 0.0);
  flapShape.closePath();

  const flapGeom = new THREE.ShapeGeometry(flapShape);
  const flap = new THREE.Mesh(flapGeom, paperMaterial);
  flap.position.z = 0.07;
  envelope.add(flap);

  // 4. Sello de cera en la punta de la solapa
  const sealGeom = new THREE.CylinderGeometry(0.38, 0.42, 0.12, 16);
  const seal = new THREE.Mesh(sealGeom, waxSealMaterial);
  seal.position.set(0, 0.0, 0.12);
  seal.rotation.x = Math.PI / 2;
  envelope.add(seal);

  // Insignia dorada en el sello (florcilla o estrella)
  const starGeom = new THREE.SphereGeometry(0.16, 8, 8);
  const starMesh = new THREE.Mesh(starGeom, goldInsigniaMaterial);
  starMesh.position.set(0, 0.0, 0.19);
  starMesh.scale.set(1.2, 1.2, 0.4);
  envelope.add(starMesh);

  // 5. Luz dorada sutil flotando con la carta
  const letterLight = new THREE.PointLight(0xFACC15, 0.8, 12);
  letterLight.position.set(0, 0, 0.8);
  envelope.add(letterLight);

  envelope.scale.set(scale, scale, scale);
  return envelope;
}

/**
 * Crea las cartas cósmicas iniciales en órbita
 */
export function createCosmicLetters(scene) {
  const lettersList = [];

  const defaultLetters = [
    {
      id: 'letter-1',
      recipient: 'Para Ti',
      title: 'Carta a Mi Flor de Primavera 🌻',
      date: 'Septiembre 21',
      body: 'Si cada estrella de esta noche fuera una flor amarilla, aun así no alcanzarían para expresar la infinita alegría que trae tu presencia a mi vida. Que nunca te falte la luz ni la sonrisa tan hermosa que ilumina todo.',
      author: 'Con todo mi amor',
      radius: 18,
      angle: 1.1,
      y: 7,
      scale: 1.05
    },
    {
      id: 'letter-2',
      recipient: 'Para Mi Amor',
      title: 'Promesa Entre Pétalos Dorados ✨',
      date: 'Eterno Presente',
      body: 'Te prometo cuidar de nosotros como se cuida a la flor más preciada del jardín. Te prometo risas en los días difíciles, abrazos eternos y flores amarillas en cada septiembre de nuestras vidas.',
      author: 'Tuyo por siempre',
      radius: 30,
      angle: 2.6,
      y: -8,
      scale: 1.1
    },
    {
      id: 'letter-3',
      recipient: 'Para Mi Persona Favorita',
      title: 'Mi Universo Eres Tú 💛',
      date: 'Bajo el cielo estrellado',
      body: 'En medio de tantas galaxias y caminos posibles, coincidir contigo ha sido el regalo más hermoso del destino. Estas flores amarillas no marchitan jamás, igual que lo que siento por ti.',
      author: 'De quien no deja de pensar en ti',
      radius: 42,
      angle: 4.1,
      y: 6,
      scale: 1.0
    },
    {
      id: 'letter-4',
      recipient: 'Para Quien Lee Esto',
      title: 'Un Deseo de Luz y Calidez 🌼',
      date: 'Hoy y Siempre',
      body: 'Que la energía radiante del color amarillo te llene de esperanza, vitalidad y amor. Que florezcas con fuerza, con orgullo y con la certeza de que tu luz es única en todo el universo.',
      author: 'Un susurro de las estrellas',
      radius: 54,
      angle: 5.3,
      y: -4,
      scale: 0.95
    }
  ];

  const hitMat = new THREE.MeshBasicMaterial({ visible: false });

  defaultLetters.forEach((cfg) => {
    const meshGroup = createLetterMesh(cfg.scale);
    const x = Math.cos(cfg.angle) * cfg.radius;
    const z = Math.sin(cfg.angle) * cfg.radius;
    meshGroup.position.set(x, cfg.y, z);

    // Orientar hacia afuera con ligera inclinación elegante
    meshGroup.lookAt(x * 1.5, cfg.y + 5, z * 1.5);
    meshGroup.rotation.z += 0.1;

    scene.add(meshGroup);

    // Hitbox
    const hitGeom = new THREE.SphereGeometry(2.8 * cfg.scale, 8, 8);
    const hitMesh = new THREE.Mesh(hitGeom, hitMat);
    meshGroup.add(hitMesh);

    const letterObj = {
      id: cfg.id,
      title: cfg.title,
      recipient: cfg.recipient,
      date: cfg.date,
      type: 'letter',
      body: cfg.body,
      author: cfg.author,
      mesh: hitMesh,
      group: meshGroup,
      orbitRadius: cfg.radius,
      orbitAngle: cfg.angle,
      orbitSpeed: 0.0018 / (cfg.radius * 0.05),
      y: cfg.y,
      scale: cfg.scale,
      targetPosition: meshGroup.position,
      cameraOffset: new THREE.Vector3(x * 0.35, cfg.y + 1.5, z * 0.35).normalize().multiplyScalar(8)
    };

    hitMesh.userData = letterObj;
    lettersList.push(letterObj);
  });

  return {
    letters: lettersList,
    addCustomLetter: (newLetterData) => {
      const radius = 22 + Math.random() * 32;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 14;
      const scale = 1.15;

      const meshGroup = createLetterMesh(scale);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      meshGroup.position.set(x, y, z);
      meshGroup.lookAt(0, 0, 0);

      scene.add(meshGroup);

      const hitGeom = new THREE.SphereGeometry(2.8 * scale, 8, 8);
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      meshGroup.add(hitMesh);

      const letterObj = {
        id: 'letter-custom-' + Date.now(),
        title: newLetterData.title,
        recipient: newLetterData.recipient,
        date: 'Hoy • Recién enviada al cosmos ✨',
        type: 'letter',
        body: newLetterData.message,
        author: newLetterData.sender,
        mesh: hitMesh,
        group: meshGroup,
        orbitRadius: radius,
        orbitAngle: angle,
        orbitSpeed: 0.0016 / (radius * 0.05),
        y,
        scale,
        targetPosition: meshGroup.position,
        cameraOffset: new THREE.Vector3(x * 0.35, y + 1.5, z * 0.35).normalize().multiplyScalar(8)
      };

      hitMesh.userData = letterObj;
      lettersList.push(letterObj);
      return letterObj;
    },
    update: () => {
      lettersList.forEach((letter) => {
        if (letter.group) {
          letter.orbitAngle += letter.orbitSpeed;
          const currentX = Math.cos(letter.orbitAngle) * letter.orbitRadius;
          const currentZ = Math.sin(letter.orbitAngle) * letter.orbitRadius;
          letter.group.position.x = currentX;
          letter.group.position.z = currentZ;
          // Levitación flotante suave
          letter.group.position.y = letter.y + Math.sin(Date.now() * 0.0015 + letter.orbitRadius) * 0.7;

          // Orientar el sobre hacia afuera sin giro axial planetario
          letter.group.lookAt(currentX * 1.5, letter.y + 5, currentZ * 1.5);
          letter.group.rotation.z += Math.sin(Date.now() * 0.001 + letter.orbitRadius) * 0.05;
        }
      });
    }
  };
}
