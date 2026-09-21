/* ==========================================================================
   BLOOMING FLOWER 3D - CRECIMIENTO DE SEMILLA A GIRASOL EN FLOR 🌻✨
   ========================================================================== */

import * as THREE from 'three';
import gsap from 'gsap';

export class BloomingSunflower {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.petals = [];
    this.innerPetals = [];
    this.leaves = [];
    this.isBlooming = false;
    this.timeline = null;

    this.buildFlowerHierarchy();
    this.scene.add(this.group);
  }

  buildFlowerHierarchy() {
    // ------------------------------------------------------------------------
    // 1. MATERIALES
    // ------------------------------------------------------------------------
    const seedMat = new THREE.MeshStandardMaterial({
      color: 0x78350F,
      roughness: 0.6,
      metalness: 0.2,
      emissive: 0x451A03,
      emissiveIntensity: 0.3
    });

    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x16A34A,
      roughness: 0.5,
      metalness: 0.1
    });

    const discMat = new THREE.MeshStandardMaterial({
      color: 0x3F1A02,
      roughness: 0.75,
      metalness: 0.15,
      emissive: 0x78350F,
      emissiveIntensity: 0.25
    });

    const petalMatOuter = new THREE.MeshStandardMaterial({
      color: 0xFACC15,
      emissive: 0xCA8A04,
      emissiveIntensity: 0.35,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    const petalMatInner = new THREE.MeshStandardMaterial({
      color: 0xFDE047,
      emissive: 0xEAB308,
      emissiveIntensity: 0.4,
      roughness: 0.25,
      metalness: 0.15,
      side: THREE.DoubleSide
    });

    // ------------------------------------------------------------------------
    // 2. SEMILLA DORADA (Base del suelo cósmico)
    // ------------------------------------------------------------------------
    this.seedGroup = new THREE.Group();
    // Forma estilizada natural de semilla de girasol dorada
    const seedShape = new THREE.Shape();
    seedShape.moveTo(0, 0.75);
    seedShape.bezierCurveTo(0.42, 0.38, 0.40, -0.35, 0, -0.8);
    seedShape.bezierCurveTo(-0.40, -0.35, -0.42, 0.38, 0, 0.75);

    const extrudeSettings = {
      depth: 0.28,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 1,
      bevelSize: 0.14,
      bevelThickness: 0.14
    };
    const seedGeom = new THREE.ExtrudeGeometry(seedShape, extrudeSettings);
    seedGeom.center();
    this.seedMesh = new THREE.Mesh(seedGeom, seedMat);
    this.seedMesh.scale.set(1.4, 1.4, 1.4);
    this.seedGroup.add(this.seedMesh);

    // Halo áureo luminoso que flota alrededor de la semilla
    const haloGeom = new THREE.RingGeometry(0.75, 1.35, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xFDE047,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    this.seedHalo = new THREE.Mesh(haloGeom, haloMat);
    this.seedHalo.rotation.x = -Math.PI / 2;
    this.seedHalo.position.y = -0.2;
    this.seedGroup.add(this.seedHalo);

    // Luz cálida de la semilla
    this.seedLight = new THREE.PointLight(0xFACC15, 2.8, 15);
    this.seedLight.position.set(0, 0.3, 0.8);
    this.seedGroup.add(this.seedLight);

    this.group.add(this.seedGroup);

    // ------------------------------------------------------------------------
    // 3. TALLO QUE BROTA Y ASCIENDE
    // ------------------------------------------------------------------------
    this.stemGroup = new THREE.Group();
    this.stemGroup.position.set(0, 0, 0);

    // Curva suave natural para el tallo
    const stemCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.2, 2.5, 0.1),
      new THREE.Vector3(-0.3, 5.0, -0.1),
      new THREE.Vector3(0, 7.5, 0)
    );
    const stemGeom = new THREE.TubeGeometry(stemCurve, 32, 0.18, 10, false);
    this.stemMesh = new THREE.Mesh(stemGeom, stemMat);
    this.stemGroup.add(this.stemMesh);

    // ------------------------------------------------------------------------
    // 4. HOJAS QUE SE DESPLIEGAN
    // ------------------------------------------------------------------------
    const createLeafShape = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.7, 0.8, 0.9, 1.8, 0, 2.4);
      shape.bezierCurveTo(-0.9, 1.8, -0.7, 0.8, 0, 0);
      const geom = new THREE.ShapeGeometry(shape, 8);
      // Arqueado 3D
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        pos.setZ(i, Math.sin((y / 2.4) * Math.PI) * 0.25);
      }
      geom.computeVertexNormals();
      return geom;
    };

    const leafGeom = createLeafShape();

    // Hoja 1 (inferior izquierda)
    this.leaf1 = new THREE.Mesh(leafGeom, stemMat);
    this.leaf1.position.set(-0.1, 2.8, 0.1);
    this.leaf1.rotation.set(0.4, -0.8, 1.1);
    this.leaf1.scale.set(0.001, 0.001, 0.001); // Comienza invisible
    this.stemGroup.add(this.leaf1);

    // Hoja 2 (superior derecha)
    this.leaf2 = new THREE.Mesh(leafGeom, stemMat);
    this.leaf2.position.set(0.15, 4.8, -0.1);
    this.leaf2.rotation.set(-0.3, 0.9, -1.0);
    this.leaf2.scale.set(0.001, 0.001, 0.001); // Comienza invisible
    this.stemGroup.add(this.leaf2);

    this.group.add(this.stemGroup);

    // ------------------------------------------------------------------------
    // 5. CABEZA DEL GIRASOL (Capullo -> Flor abierta)
    // ------------------------------------------------------------------------
    this.flowerHead = new THREE.Group();
    this.flowerHead.position.set(0, 7.5, 0);
    this.flowerHead.rotation.x = -0.3; // Inclinación suave hacia la cámara

    // Cáliz verde posterior
    const calyxGeom = new THREE.ConeGeometry(1.2, 0.8, 16);
    this.calyx = new THREE.Mesh(calyxGeom, stemMat);
    this.calyx.position.set(0, 0, -0.4);
    this.calyx.rotation.x = -Math.PI / 2;
    this.flowerHead.add(this.calyx);

    // Disco central abombado
    const discGeom = new THREE.CylinderGeometry(1.3, 1.0, 0.45, 24);
    this.disc = new THREE.Mesh(discGeom, discMat);
    this.disc.rotation.x = Math.PI / 2;
    this.flowerHead.add(this.disc);

    // Centro dorado brillante
    const glowDiscGeom = new THREE.SphereGeometry(0.8, 16, 16);
    const glowDiscMat = new THREE.MeshBasicMaterial({ color: 0xF59E0B });
    this.glowDisc = new THREE.Mesh(glowDiscGeom, glowDiscMat);
    this.glowDisc.scale.set(1.2, 1.2, 0.4);
    this.flowerHead.add(this.glowDisc);

    // Pétalos curvados
    const createPetalShape = (len, w) => {
      const s = new THREE.Shape();
      s.moveTo(0, 0);
      s.bezierCurveTo(w * 0.7, len * 0.3, w, len * 0.7, 0, len);
      s.bezierCurveTo(-w, len * 0.7, -w * 0.7, len * 0.3, 0, 0);
      const g = new THREE.ShapeGeometry(s, 8);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const y = p.getY(i);
        p.setZ(i, Math.sin((y / len) * Math.PI) * 0.3);
      }
      g.computeVertexNormals();
      return g;
    };

    const outerGeom = createPetalShape(2.6, 0.75);
    const innerGeom = createPetalShape(1.9, 0.58);

    // Anillo exterior (22 pétalos)
    const outerCount = 22;
    this.outerRing = new THREE.Group();
    for (let i = 0; i < outerCount; i++) {
      const angle = (i / outerCount) * Math.PI * 2;
      const pivot = new THREE.Group();
      pivot.rotation.z = angle;

      const petal = new THREE.Mesh(outerGeom, petalMatOuter);
      // Posición inicial: completamente cerrado hacia el frente (capullo)
      petal.rotation.x = Math.PI * 0.45;
      petal.scale.set(0.001, 0.001, 0.001);

      pivot.add(petal);
      this.outerRing.add(pivot);
      this.petals.push({ pivot, petal, openAngle: 0.12 });
    }
    this.flowerHead.add(this.outerRing);

    // Anillo interior (18 pétalos)
    const innerCount = 18;
    this.innerRing = new THREE.Group();
    for (let i = 0; i < innerCount; i++) {
      const angle = (i / innerCount) * Math.PI * 2 + (Math.PI / innerCount);
      const pivot = new THREE.Group();
      pivot.rotation.z = angle;

      const petal = new THREE.Mesh(innerGeom, petalMatInner);
      petal.position.z = 0.08;
      // Cerrado hacia adelante
      petal.rotation.x = Math.PI * 0.48;
      petal.scale.set(0.001, 0.001, 0.001);

      pivot.add(petal);
      this.innerRing.add(pivot);
      this.innerPetals.push({ pivot, petal, openAngle: -0.08 });
    }
    this.flowerHead.add(this.innerRing);

    // Luz de florecimiento radiante
    this.flowerLight = new THREE.PointLight(0xFACC15, 0.1, 20);
    this.flowerLight.position.set(0, 0, 1.2);
    this.flowerHead.add(this.flowerLight);

    // Iniciar con flor y tallo en estado de semilla (invisibles/pequeños)
    this.stemGroup.scale.set(0.001, 0.001, 0.001);
    this.flowerHead.scale.set(0.001, 0.001, 0.001);
    this.disc.scale.set(0.001, 0.001, 0.001);
    this.glowDisc.scale.set(0.001, 0.001, 0.001);

    this.group.add(this.flowerHead);
  }

  /**
   * Restablece el girasol a su estado inicial de semilla diminuta
   */
  resetToSeedState(camera, controls) {
    if (this.timeline) this.timeline.kill();
    this.isBlooming = false;

    // Restablecer semilla
    this.seedMesh.scale.set(1.4, 1.4, 1.4);
    if (this.seedHalo) this.seedHalo.scale.set(1, 1, 1);
    this.seedLight.intensity = 2.8;

    // Ocultar tallo y hojas
    this.stemGroup.scale.set(0.001, 0.001, 0.001);
    this.leaf1.scale.set(0.001, 0.001, 0.001);
    this.leaf2.scale.set(0.001, 0.001, 0.001);

    // Ocultar cabeza floral y disco
    this.flowerHead.scale.set(0.001, 0.001, 0.001);
    this.flowerHead.rotation.set(-0.3, 0, 0);
    this.disc.scale.set(0.001, 0.001, 0.001);
    this.glowDisc.scale.set(0.001, 0.001, 0.001);
    this.flowerLight.intensity = 0.1;

    // Restablecer pétalos cerrados y diminutos
    this.petals.forEach(p => {
      p.petal.scale.set(0.001, 0.001, 0.001);
      p.petal.rotation.x = Math.PI * 0.45;
    });

    this.innerPetals.forEach(p => {
      p.petal.scale.set(0.001, 0.001, 0.001);
      p.petal.rotation.x = Math.PI * 0.48;
    });

    if (camera && controls) {
      const gx = this.group.position.x;
      const gy = this.group.position.y;
      const gz = this.group.position.z;
      camera.position.set(gx, gy + 0.4, gz + 4.2);
      controls.target.set(gx, gy + 0.1, gz);
      controls.enabled = false;
    }
  }

  /**
   * Ejecuta la animación cinematográfica de crecimiento y floración
   */
  playGrowthAnimation({ camera, controls, onProgressText, onOpenSceneCircle, onComplete }) {
    this.resetToSeedState(camera, controls);
    this.isBlooming = true;
    controls.enabled = false;

    const gx = this.group.position.x;
    const gy = this.group.position.y;
    const gz = this.group.position.z;
    const targetPos = controls.target;

    this.timeline = gsap.timeline({
      onComplete: () => {
        this.isBlooming = false;
        controls.enabled = true;
        if (onComplete) onComplete();
      }
    });

    // ------------------------------------------------------------------------
    // ETAPA 1: Latido de la Semilla Dorada
    // ------------------------------------------------------------------------
    this.timeline.call(() => {
      if (onProgressText) onProgressText('En la inmensidad del espacio, late una pequeña semilla...');
    });

    // Pulsación suave de la semilla
    this.timeline.to(this.seedMesh.scale, {
      x: 1.65,
      y: 1.65,
      z: 1.65,
      duration: 1.2,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut'
    });

    if (this.seedHalo) {
      this.timeline.to(this.seedHalo.scale, {
        x: 1.4,
        y: 1.4,
        duration: 1.2,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      }, '<');
    }

    this.timeline.to(this.seedLight, {
      intensity: 3.6,
      duration: 1.2,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut'
    }, '<');

    // ------------------------------------------------------------------------
    // ETAPA 2: El Brote Verde Asciende (Tallo y Hojas)
    // ------------------------------------------------------------------------
    this.timeline.call(() => {
      if (onProgressText) onProgressText('Brotando con fuerza hacia la luz...');
    }, null, '+=0.2');

    // El tallo empieza a crecer verticalmente
    this.timeline.to(this.stemGroup.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 3.2,
      ease: 'power2.out'
    });

    // La cámara asciende suavemente siguiendo la punta del tallo
    this.timeline.to(camera.position, {
      x: gx,
      y: gy + 8.0,
      z: gz + 8.6,
      duration: 3.8,
      ease: 'power1.inOut'
    }, '<');

    this.timeline.to(targetPos, {
      x: gx,
      y: gy + 7.4,
      z: gz,
      duration: 3.8,
      ease: 'power1.inOut',
      onUpdate: () => controls.target.copy(targetPos)
    }, '<');

    // Hojas se desenrollan a medida que el tallo sube
    this.timeline.to(this.leaf1.scale, {
      x: 0.9,
      y: 0.9,
      z: 0.9,
      duration: 1.4,
      ease: 'back.out(1.7)'
    }, '-=2.4');

    this.timeline.to(this.leaf2.scale, {
      x: 1.0,
      y: 1.0,
      z: 1.0,
      duration: 1.4,
      ease: 'back.out(1.7)'
    }, '-=1.6');

    // ------------------------------------------------------------------------
    // ETAPA 3: Formación y Apertura del Capullo Floral (Floración)
    // ------------------------------------------------------------------------
    this.timeline.call(() => {
      if (onProgressText) onProgressText('Y el amor florece en tonos amarillos...');
    }, null, '-=0.5');

    // Aparece el capullo en la punta
    this.timeline.to(this.flowerHead.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.6,
      ease: 'power2.out'
    }, '-=0.8');

    // El disco central se expande con rebote suave
    this.timeline.to([this.disc.scale, this.glowDisc.scale], {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.8,
      ease: 'elastic.out(1, 0.6)'
    }, '-=0.6');

    // Despliegue en espiral de los pétalos internos
    this.innerPetals.forEach((p, idx) => {
      this.timeline.to(p.petal.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.2,
        ease: 'back.out(1.5)'
      }, `-=${1.1 - (idx * 0.02)}`);

      this.timeline.to(p.petal.rotation, {
        x: p.openAngle,
        duration: 1.4,
        ease: 'power2.out'
      }, '<');
    });

    // Despliegue de los pétalos exteriores principales
    this.petals.forEach((p, idx) => {
      this.timeline.to(p.petal.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.3,
        ease: 'back.out(1.4)'
      }, `-=${1.15 - (idx * 0.02)}`);

      this.timeline.to(p.petal.rotation, {
        x: p.openAngle,
        duration: 1.5,
        ease: 'power2.out'
      }, '<');
    });

    // Luz dorada resplandeciente al abrirse completamente
    this.timeline.to(this.flowerLight, {
      intensity: 2.2,
      duration: 1.2,
      ease: 'power1.in'
    }, '-=1.0');

    // ------------------------------------------------------------------------
    // ETAPA 4: Apertura Circular Cinemática de Escena y Revelación del Universo
    // ------------------------------------------------------------------------
    this.timeline.call(() => {
      if (onProgressText) onProgressText('Bienvenido al Universo de Flores Amarillas ✨');
      if (onOpenSceneCircle) onOpenSceneCircle();
    }, null, '+=0.2');

    // Cámara retrocede suavemente a la posición panorámica cósmica
    this.timeline.to(camera.position, {
      x: 0,
      y: 32,
      z: 75,
      duration: 3.2,
      ease: 'power3.inOut'
    }, '+=0.2');

    this.timeline.to(targetPos, {
      x: 0,
      y: 0,
      z: 0,
      duration: 3.5,
      ease: 'power3.inOut',
      onUpdate: () => controls.target.copy(targetPos)
    }, '<');
  }

  /**
   * Salta inmediatamente la animación colocando la flor en estado abierto y la cámara en panorámica
   */
  skipAnimation(camera, controls, onComplete) {
    if (this.timeline) this.timeline.kill();

    this.isBlooming = false;
    controls.enabled = true;

    // Fijar flor abierta completa
    this.stemGroup.scale.set(1, 1, 1);
    this.leaf1.scale.set(0.9, 0.9, 0.9);
    this.leaf2.scale.set(1.0, 1.0, 1.0);
    this.flowerHead.scale.set(1, 1, 1);
    this.disc.scale.set(1, 1, 1);
    this.glowDisc.scale.set(1, 1, 1);
    this.flowerLight.intensity = 1.8;

    this.innerPetals.forEach(p => {
      p.petal.scale.set(1, 1, 1);
      p.petal.rotation.x = p.openAngle;
    });

    this.petals.forEach(p => {
      p.petal.scale.set(1, 1, 1);
      p.petal.rotation.x = p.openAngle;
    });

    // Posición panorámica
    camera.position.set(0, 32, 75);
    controls.target.set(0, 0, 0);

    if (onComplete) onComplete();
  }

  update(time) {
    // Leve balanceo natural cuando ya ha florecido
    if (!this.isBlooming) {
      this.flowerHead.rotation.z = Math.sin(time * 0.8) * 0.04;
      this.flowerHead.rotation.x = -0.3 + Math.cos(time * 0.6) * 0.03;
    }
  }
}
