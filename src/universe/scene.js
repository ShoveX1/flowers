/* ==========================================================================
   SCENE 3D - CONFIGURACIÓN THREE.JS, CÁMARA, LUCES Y CINEMÁTICAS GSAP
   ========================================================================== */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

export class UniverseScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.interactiveObjects = [];
    this.onSelectObject = null;
    this.isFlying = false;
    this.tourActive = false;
    this.tourIndex = 0;
    this.tourTimeout = null;

    this.init();
    this.setupLights();
    this.setupControls();
    this.setupRaycaster();
    this.setupResize();
  }

  init() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Escena limpia con fondo transparente para mostrar el degradado amable y femenino del fondo
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // Cámara de perspectiva
    this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 0.1, 1000);
    this.initialPosition = new THREE.Vector3(0, 26, 70);
    this.camera.position.copy(this.initialPosition);

    // Renderizador con transparencia y mapeo tonal cinematográfico
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setClearColor(0x000000, 0); // Fondo 100% transparente para integrarse con CSS
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  setupLights() {
    // Luz ambiental cálida y acogedora con matiz crema-rosado
    const ambientLight = new THREE.AmbientLight(0xFFF1F2, 1.1);
    this.scene.add(ambientLight);

    // Luz hemisférica con suave contraste cielo blush y suelo malva
    const hemiLight = new THREE.HemisphereLight(0xFDF2F8, 0x2E1038, 0.9);
    this.scene.add(hemiLight);

    // Luz direccional dorada principal
    const dirLight = new THREE.DirectionalLight(0xFFFBEB, 2.2);
    dirLight.position.set(35, 50, 40);
    this.scene.add(dirLight);

    // Luz de relleno con destello suave rose-gold
    const backLight = new THREE.DirectionalLight(0xF472B6, 0.8);
    backLight.position.set(-30, -15, -30);
    this.scene.add(backLight);
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 6;
    this.controls.maxDistance = 160;
    this.controls.maxPolarAngle = Math.PI / 1.7; // Evita mirar desde abajo del universo
    this.controls.enablePan = false; // El centro focal siempre es la flor que nace
    this.controls.target.set(0, 0, 0);
  }

  setupRaycaster() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;
    this.tooltip = document.getElementById('hover-tooltip');
    this.tooltipText = document.getElementById('tooltip-text');

    // Manejo de movimiento de ratón para hover
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (this.tooltip && !this.tooltip.classList.contains('hidden')) {
        this.tooltip.style.left = `${e.clientX}px`;
        this.tooltip.style.top = `${e.clientY}px`;
      }
    });

    // Clic o toque
    const handleInteraction = (clientX, clientY) => {
      this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = this.interactiveObjects.map((obj) => obj.mesh);
      const intersects = this.raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const selected = intersects[0].object.userData;
        if (selected && this.onSelectObject) {
          this.onSelectObject(selected);
        }
      }
    };

    window.addEventListener('click', (e) => {
      // Ignorar clics en la interfaz UI
      if (e.target.closest('#ui-container') && !e.target.classList.contains('modal-backdrop')) {
        return;
      }
      handleInteraction(e.clientX, e.clientY);
    });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        if (e.target.closest('#ui-container') && !e.target.classList.contains('modal-backdrop')) {
          return;
        }
        handleInteraction(touch.clientX, touch.clientY);
      }
    });
  }

  checkHover() {
    if (this.isFlying) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const meshes = this.interactiveObjects.map((obj) => obj.mesh);
    const intersects = this.raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      document.body.style.cursor = 'pointer';
      const objData = intersects[0].object.userData;
      if (this.tooltip && objData) {
        this.tooltipText.textContent = `${objData.type === 'letter' ? '💌' : '🌻'} ${objData.title}`;
        this.tooltip.classList.remove('hidden');
      }
    } else {
      document.body.style.cursor = 'default';
      if (this.tooltip) {
        this.tooltip.classList.add('hidden');
      }
    }
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  /**
   * Cinemática de vuelo hacia un objeto 3D seleccionado con GSAP
   */
  flyToObject(objData, onComplete = null) {
    if (!objData) return;
    this.isFlying = true;
    this.controls.enabled = false;

    // Calcular la posición actual en tiempo real del objeto
    const targetWorldPos = new THREE.Vector3();
    if (objData.group) {
      objData.group.getWorldPosition(targetWorldPos);
    } else {
      targetWorldPos.copy(objData.targetPosition);
    }

    // Posición deseada para la cámara
    const desiredCamPos = targetWorldPos.clone().add(objData.cameraOffset);

    // Animación suave de cámara y foco de los controles
    const currentTarget = this.controls.target.clone();

    gsap.killTweensOf(this.camera.position);
    gsap.killTweensOf(currentTarget);

    gsap.to(this.camera.position, {
      x: desiredCamPos.x,
      y: desiredCamPos.y,
      z: desiredCamPos.z,
      duration: 2.2,
      ease: 'power3.inOut'
    });

    gsap.to(currentTarget, {
      x: targetWorldPos.x,
      y: targetWorldPos.y,
      z: targetWorldPos.z,
      duration: 2.2,
      ease: 'power3.inOut',
      onUpdate: () => {
        this.controls.target.copy(currentTarget);
      },
      onComplete: () => {
        this.isFlying = false;
        this.controls.enabled = true;
        if (onComplete) onComplete();
      }
    });
  }

  /**
   * Retorna suavemente la vista y el foco a la flor central que nace en (0, 0, 0)
   */
  returnToCenter(duration = 1.8, onComplete = null) {
    this.stopTour();
    this.isFlying = true;
    this.controls.enabled = false;

    const currentTarget = this.controls.target.clone();

    gsap.killTweensOf(this.camera.position);
    gsap.killTweensOf(currentTarget);

    gsap.to(this.camera.position, {
      x: this.initialPosition.x,
      y: this.initialPosition.y,
      z: this.initialPosition.z,
      duration,
      ease: 'power2.inOut'
    });

    gsap.to(currentTarget, {
      x: 0,
      y: 0,
      z: 0,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        this.controls.target.copy(currentTarget);
      },
      onComplete: () => {
        this.isFlying = false;
        this.controls.enabled = true;
        if (onComplete) onComplete();
      }
    });
  }

  /**
   * Vuelve a la vista panorámica amplia del cosmos
   */
  resetCamera() {
    this.returnToCenter(2.0);
  }

  /**
   * Modo Tour Cinemático que vuela automáticamente entre todas las flores y cartas
   */
  startTour(onInspectItem) {
    this.tourActive = true;
    this.tourIndex = 0;

    const nextStop = () => {
      if (!this.tourActive) return;
      const currentItem = this.interactiveObjects[this.tourIndex];
      this.flyToObject(currentItem, () => {
        if (onInspectItem) onInspectItem(currentItem);

        // Permanecer 5 segundos y pasar al siguiente
        this.tourTimeout = setTimeout(() => {
          if (!this.tourActive) return;
          this.tourIndex = (this.tourIndex + 1) % this.interactiveObjects.length;
          nextStop();
        }, 5500);
      });
    };

    nextStop();
  }

  stopTour() {
    this.tourActive = false;
    if (this.tourTimeout) {
      clearTimeout(this.tourTimeout);
      this.tourTimeout = null;
    }
  }

  render() {
    this.controls.update();
    this.checkHover();
    this.renderer.render(this.scene, this.camera);
  }
}
