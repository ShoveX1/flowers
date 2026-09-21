/* ==========================================================================
   STARDUST & PETALS - CAMPO ESTELAR LIMPIO Y PÉTALOS 3D
   ========================================================================== */

import * as THREE from 'three';

/**
 * Crea estrellas cósmicas redondas y nítidas usando un shader matemático (sin texturas ni bordes negros cuadrados)
 */
export function createCosmicStars(scene, count = 2000) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const starColors = [
    new THREE.Color('#FFFBEB'), // Blanco cálido brillante
    new THREE.Color('#FEF08A'), // Amarillo suave
    new THREE.Color('#FACC15'), // Dorado cálido
    new THREE.Color('#F472B6'), // Rosa pastel amable
    new THREE.Color('#FBCFE8'), // Rosa blush suave
    new THREE.Color('#E9D5FF')  // Lavanda etérea
  ];

  for (let i = 0; i < count; i++) {
    const radius = 100 + Math.random() * 260;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    const chosenColor = starColors[Math.floor(Math.random() * starColors.length)];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Shader para estrellas perfectamente circulares sin artefactos cuadrados
  const material = new THREE.ShaderMaterial({
    vertexShader: `
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(260.0 / -mvPosition.z, 1.2, 5.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float strength = pow(1.0 - (dist * 2.0), 1.5);
        gl_FragColor = vec4(vColor, strength * 0.95);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  return {
    mesh: stars,
    update: (time) => {
      stars.rotation.y = time * 0.012;
    }
  };
}

/**
 * Pétalos de flores amarillas que flotan suavemente por el espacio en 3D (geometría pura sin fondos)
 */
export function createDriftingPetals(scene, count = 140) {
  const petalsGroup = new THREE.Group();

  // Geometría curva para el pétalo
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.5, 0.7, 0.7, 1.8, 0, 2.3);
  shape.bezierCurveTo(-0.7, 1.8, -0.5, 0.7, 0, 0);

  const petalGeom = new THREE.ShapeGeometry(shape, 8);
  const pos = petalGeom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    pos.setZ(i, Math.sin((y / 2.3) * Math.PI) * 0.22);
  }
  petalGeom.computeVertexNormals();

  const petalMatYellow = new THREE.MeshStandardMaterial({
    color: 0xFACC15,
    emissive: 0xCA8A04,
    emissiveIntensity: 0.22,
    roughness: 0.35,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const petalMatPink = new THREE.MeshStandardMaterial({
    color: 0xF472B6,
    emissive: 0x9D174D,
    emissiveIntensity: 0.25,
    roughness: 0.35,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const petalsData = [];

  for (let i = 0; i < count; i++) {
    // 75% pétalos amarillos, 25% acento dulce de pétalos rosa pastel
    const isPink = i % 4 === 0;
    const mesh = new THREE.Mesh(petalGeom, isPink ? petalMatPink : petalMatYellow);
    const radius = 18 + Math.random() * 85;
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 50;

    mesh.position.set(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius
    );

    const scale = 0.25 + Math.random() * 0.35;
    mesh.scale.set(scale, scale, scale);

    mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    petalsGroup.add(mesh);

    petalsData.push({
      mesh,
      speedY: 0.01 + Math.random() * 0.02,
      rotX: (Math.random() - 0.5) * 0.015,
      rotY: (Math.random() - 0.5) * 0.015,
      rotZ: (Math.random() - 0.5) * 0.015,
      orbitSpeed: 0.003 + Math.random() * 0.006,
      radius,
      angle
    });
  }

  scene.add(petalsGroup);

  return {
    group: petalsGroup,
    update: () => {
      petalsData.forEach(p => {
        p.mesh.rotation.x += p.rotX;
        p.mesh.rotation.y += p.rotY;
        p.mesh.rotation.z += p.rotZ;

        p.angle += p.orbitSpeed;
        p.mesh.position.x = Math.cos(p.angle) * p.radius;
        p.mesh.position.z = Math.sin(p.angle) * p.radius;
        p.mesh.position.y += Math.sin(p.angle * 2) * 0.03;
      });
    }
  };
}
