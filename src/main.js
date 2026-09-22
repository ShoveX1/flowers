import * as THREE from 'three';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { UniverseScene } from './universe/scene.js';
import { createCosmicStars, createDriftingPetals } from './universe/stardust.js';
import { createFlowerUniverse } from './universe/flowers.js';
import { createCosmicLetters } from './universe/letters.js';
import { audioManager } from './audio/audioManager.js';
import { BloomingSunflower } from './universe/bloomingFlower.js';

// Inicialización general al cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('webgl');
  const sceneController = new UniverseScene(canvas);

  // 1. Entorno cósmico limpio y elegante (estrellas y pétalos 3D flotantes)
  const stars = createCosmicStars(sceneController.scene, 2200);
  const petals = createDriftingPetals(sceneController.scene, 150);

  // 2. Girasol Héroe que nace desde la semilla (Foco central del cosmos)
  const bloomingSunflower = new BloomingSunflower(sceneController.scene);
  bloomingSunflower.group.position.set(0, -7.5, 0);

  // 3. Añadir los anillos cósmicos y flores en órbita
  const flowerSystem = createFlowerUniverse(sceneController.scene);

  // 4. Añadir las cartas cósmicas flotantes
  const letterSystem = createCosmicLetters(sceneController.scene);

  // Hitbox interactivo para el girasol héroe florecido
  const heroHitGeom = new THREE.SphereGeometry(3.6, 12, 12);
  const heroHitMat = new THREE.MeshBasicMaterial({ visible: false });
  const heroHitMesh = new THREE.Mesh(heroHitGeom, heroHitMat);
  bloomingSunflower.flowerHead.add(heroHitMesh);

  const heroFlowerData = {
    id: 'hero-blooming-flower',
    title: 'Girasol Central 🌻🧠',
    date: '21 de Septiembre',
    type: 'flower',
    body: 'Flores amarillas para desearte mucho éxito en la carrera. Estudia con ganas, pero sin descuidarte. ¡Vas a ser una psicóloga genial!',
    author: 'Tu amigo ✨',
    mesh: heroHitMesh,
    group: bloomingSunflower.flowerHead,
    targetPosition: new THREE.Vector3(0, 0, 0),
    cameraOffset: new THREE.Vector3(0, 2, 13)
  };
  heroHitMesh.userData = heroFlowerData;

  // Unificar objetos interactivos para clics y hover
  const allInteractive = [heroFlowerData, ...flowerSystem.flowers, ...letterSystem.letters];
  sceneController.interactiveObjects = allInteractive;

  // Actualizar contadores del HUD
  updateHUDCounters(flowerSystem.flowers.length + 1, letterSystem.letters.length);

  // --------------------------------------------------------------------------
  // INTERACCIÓN: SELECCIONAR FLOR O CARTA
  // --------------------------------------------------------------------------
  let currentSelectedIndex = 0;

  function openItemModal(itemData) {
    audioManager.playChime();

    // Actualizar datos del modal
    document.getElementById('modal-date').textContent = itemData.date || '21 de Septiembre';
    document.getElementById('modal-title').textContent = itemData.title;
    document.getElementById('modal-body').textContent = itemData.body;
    document.getElementById('modal-author').textContent = `— ${itemData.author || 'Tu amigo sincero'}`;

    // Disparar sutil lluvia de confeti dorado
    triggerPetalConfetti();

    // Mostrar modal con transición
    const modal = document.getElementById('message-modal');
    modal.classList.remove('hidden');

    // Actualizar índice para botón "Siguiente"
    currentSelectedIndex = sceneController.interactiveObjects.findIndex(obj => obj.id === itemData.id);
  }

  sceneController.onSelectObject = (itemData) => {
    sceneController.stopTour();
    sceneController.flyToObject(itemData, () => {
      openItemModal(itemData);
    });
  };

  // --------------------------------------------------------------------------
  // LLUVIA DE PÉTALOS CON CONFETTI DORADO
  // --------------------------------------------------------------------------
  function triggerPetalConfetti() {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#FEF08A', '#EAB308', '#CA8A04', '#FFFFFF'],
      shapes: ['circle'],
      scalar: 1.2
    });
  }

  // --------------------------------------------------------------------------
  // BOTONES Y CONTROLES DEL MODAL DE CARTAS
  // --------------------------------------------------------------------------
  const modal = document.getElementById('message-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnModalConfetti = document.getElementById('btn-modal-confetti');
  const btnNextItem = document.getElementById('btn-next-item');

  function closeModal() {
    modal.classList.add('hidden');
    if (!sceneController.tourActive) {
      sceneController.returnToCenter(1.6);
    }
  }

  btnCloseModal.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  btnModalConfetti.addEventListener('click', () => {
    audioManager.playChime();
    triggerPetalConfetti();
    confetti({
      particleCount: 35,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FACC15', '#FEF08A', '#F59E0B']
    });
    confetti({
      particleCount: 35,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FACC15', '#FEF08A', '#F59E0B']
    });
  });

  btnNextItem.addEventListener('click', () => {
    closeModal();
    currentSelectedIndex = (currentSelectedIndex + 1) % sceneController.interactiveObjects.length;
    const nextItem = sceneController.interactiveObjects[currentSelectedIndex];
    sceneController.flyToObject(nextItem, () => {
      openItemModal(nextItem);
    });
  });

  // --------------------------------------------------------------------------
  // FORMULARIO: CREAR CARTA PROPIA EN EL UNIVERSO 3D
  // --------------------------------------------------------------------------
  const createModal = document.getElementById('create-modal');
  const btnNewLetter = document.getElementById('btn-new-letter');
  const btnCloseCreate = document.getElementById('btn-close-create');
  const btnCancelCreate = document.getElementById('btn-cancel-create');
  const formCreateLetter = document.getElementById('form-create-letter');

  function openCreateModal() {
    createModal.classList.remove('hidden');
  }

  function closeCreateModal() {
    createModal.classList.add('hidden');
  }

  if (btnNewLetter && createModal) {
    btnNewLetter.addEventListener('click', openCreateModal);
    btnCloseCreate?.addEventListener('click', closeCreateModal);
    btnCancelCreate?.addEventListener('click', closeCreateModal);
    createModal.addEventListener('click', (e) => {
      if (e.target === createModal) closeCreateModal();
    });
  }

  formCreateLetter.addEventListener('submit', (e) => {
    e.preventDefault();
    const recipient = document.getElementById('input-recipient').value.trim();
    const title = document.getElementById('input-title').value.trim();
    const message = document.getElementById('input-message').value.trim();
    const sender = document.getElementById('input-sender').value.trim();

    if (!recipient || !title || !message) return;

    // Crear la carta en el espacio 3D
    const newLetterObj = letterSystem.addCustomLetter({
      recipient,
      title,
      message,
      sender: sender || 'Un amigo con aprecio y admiración'
    });

    // Agregar a los interactivos
    sceneController.interactiveObjects.push(newLetterObj);
    updateHUDCounters(flowerSystem.flowers.length, letterSystem.letters.length);

    closeCreateModal();
    formCreateLetter.reset();

    // Vuelo de cámara hacia la carta recién creada
    audioManager.playChime();
    triggerPetalConfetti();

    setTimeout(() => {
      sceneController.flyToObject(newLetterObj, () => {
        openItemModal(newLetterObj);
      });
    }, 400);
  });

  // --------------------------------------------------------------------------
  // BOTONES HUD (MÚSICA, TOUR, RESET CÁMARA)
  // --------------------------------------------------------------------------
  const btnAudio = document.getElementById('btn-audio');
  const audioWaves = document.getElementById('audio-waves');

  btnAudio.addEventListener('click', () => {
    const isPlaying = audioManager.toggle();
    if (isPlaying) {
      btnAudio.classList.add('playing');
      audioWaves.style.opacity = '1';
    } else {
      btnAudio.classList.remove('playing');
      audioWaves.style.opacity = '0.4';
    }
  });

  const btnTour = document.getElementById('btn-tour');
  btnTour.addEventListener('click', () => {
    if (sceneController.tourActive) {
      sceneController.stopTour();
      btnTour.classList.remove('highlight');
      btnTour.querySelector('.btn-text').textContent = 'Paseo Guiado';
    } else {
      closeModal();
      btnTour.classList.add('highlight');
      btnTour.querySelector('.btn-text').textContent = 'Detener Paseo';
      audioManager.init();
      if (!audioManager.isPlaying) {
        audioManager.play();
        btnAudio.classList.add('playing');
      }
      sceneController.startTour((item) => {
        openItemModal(item);
      });
    }
  });

  const btnResetCam = document.getElementById('btn-reset-cam');
  btnResetCam.addEventListener('click', () => {
    closeModal();
    sceneController.resetCamera();
  });

  // --------------------------------------------------------------------------
  // CONTROL DE VISIBILIDAD: PANTALLA DE INICIO VS UNIVERSO COMPLETO
  // --------------------------------------------------------------------------
  function setUniverseVisible(visible) {
    if (flowerSystem.grandBouquet) {
      flowerSystem.grandBouquet.visible = visible;
    }
    flowerSystem.flowers.forEach(f => {
      if (f.group) f.group.visible = visible;
    });
    letterSystem.letters.forEach(l => {
      if (l.group) l.group.visible = visible;
    });

    const hudElements = document.querySelectorAll('.hud-element');
    hudElements.forEach(el => {
      if (visible) {
        el.classList.remove('hidden-hud');
      } else {
        el.classList.add('hidden-hud');
      }
    });
  }

  // --------------------------------------------------------------------------
  // PANTALLA INICIAL LIMPIA: SOLO LA FLOR NACIENDO + APERTURA CIRCULAR DE ESCENA
  // --------------------------------------------------------------------------
  const cleanBloomScreen = document.getElementById('clean-bloom-screen');
  const bloomCaption = document.getElementById('bloom-caption');
  const btnStartBloom = document.getElementById('btn-start-bloom');
  const btnSkipIntro = document.getElementById('btn-skip-intro');
  const btnReplayBloom = document.getElementById('btn-replay-bloom');
  const irisWipe = document.getElementById('iris-wipe');
  const irisRing = document.getElementById('iris-ring');
  const irisFlash = document.getElementById('iris-flash');

  // Configuración inicial: Pantalla completa limpia (solo la semilla y el cosmos suave)
  setUniverseVisible(false);
  bloomingSunflower.resetToSeedState(sceneController.camera, sceneController.controls);

  /**
   * Dispara la transición cinemática de apertura circular ("como si fuera abriendo una escena")
   */
  function triggerIrisSceneOpening() {
    if (!irisWipe || !irisRing) {
      setUniverseVisible(true);
      if (cleanBloomScreen) cleanBloomScreen.classList.add('hidden');
      return;
    }

    const irisCurtain = document.getElementById('iris-curtain');

    irisWipe.classList.remove('hidden');
    audioManager.playChime();
    triggerPetalConfetti();

    // Iniciar velo con orificio en 0%
    if (irisCurtain) {
      irisCurtain.style.opacity = '1';
      irisCurtain.style.setProperty('--iris-radius', '0%');
    }

    // El universo se revela para ser apreciado a través de la apertura del círculo
    setUniverseVisible(true);
    if (cleanBloomScreen) cleanBloomScreen.classList.add('hidden');

    // Apertura progresiva del círculo de 0% a 130%
    const irisState = { radius: 0 };
    gsap.to(irisState, {
      radius: 130,
      duration: 2.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (irisCurtain) {
          irisCurtain.style.setProperty('--iris-radius', `${irisState.radius}%`);
        }
      },
      onComplete: () => {
        if (irisCurtain) irisCurtain.style.opacity = '0';
        irisWipe.classList.add('hidden');
        if (btnStartBloom) {
          btnStartBloom.style.display = '';
          btnStartBloom.style.opacity = '1';
        }
      }
    });

    // Anillo dorado radiante que enmarca el borde del círculo abriéndose
    gsap.fromTo(irisRing, 
      { scale: 0, opacity: 1 }, 
      {
        scale: 230,
        opacity: 0,
        duration: 2.6,
        ease: 'power2.inOut'
      }
    );

    // Destello de luz suave cósmico
    if (irisFlash) {
      gsap.fromTo(irisFlash, 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 0.75, scale: 1.4, duration: 0.55, yoyo: true, repeat: 1, ease: 'sine.inOut' }
      );
    }
  }

  function startBloomExperience() {
    closeModal();
    sceneController.stopTour();

    if (cleanBloomScreen) {
      cleanBloomScreen.classList.remove('hidden');
    }
    if (btnStartBloom) {
      // Ocultar botón suavemente para dejar la pantalla 100% limpia con la flor y el texto
      gsap.to(btnStartBloom, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        onComplete: () => {
          btnStartBloom.style.display = 'none';
        }
      });
    }

    // Activar música de fondo romántica automáticamente
    audioManager.init();
    if (!audioManager.isPlaying) {
      audioManager.play();
      btnAudio.classList.add('playing');
      audioWaves.style.opacity = '1';
    }

    bloomingSunflower.playGrowthAnimation({
      camera: sceneController.camera,
      controls: sceneController.controls,
      onProgressText: (msg) => {
        if (bloomCaption) {
          gsap.to(bloomCaption, {
            opacity: 0,
            duration: 0.25,
            onComplete: () => {
              bloomCaption.textContent = msg;
              gsap.to(bloomCaption, { opacity: 1, duration: 0.45 });
            }
          });
        }
      },
      onOpenSceneCircle: () => {
        triggerIrisSceneOpening();
      },
      onComplete: () => {
        setUniverseVisible(true);
      }
    });
  }

  function goToUniverseDirectly() {
    if (cleanBloomScreen) cleanBloomScreen.classList.add('hidden');
    audioManager.init();
    if (!audioManager.isPlaying) {
      audioManager.play();
      btnAudio.classList.add('playing');
      audioWaves.style.opacity = '1';
    }
    bloomingSunflower.skipAnimation(sceneController.camera, sceneController.controls, () => {
      setUniverseVisible(true);
    });
  }

  if (btnStartBloom) {
    btnStartBloom.addEventListener('click', startBloomExperience);
  }

  if (btnSkipIntro) {
    btnSkipIntro.addEventListener('click', goToUniverseDirectly);
  }

  if (btnReplayBloom) {
    btnReplayBloom.addEventListener('click', () => {
      setUniverseVisible(false);
      if (btnStartBloom) {
        btnStartBloom.style.display = '';
        btnStartBloom.style.opacity = '1';
      }
      if (bloomCaption) {
        bloomCaption.textContent = 'En la inmensidad del espacio, late una pequeña semilla...';
      }
      startBloomExperience();
    });
  }

  function updateHUDCounters(flowers, letters) {
    const fc = document.getElementById('flower-count');
    const lc = document.getElementById('letter-count');
    if (fc) fc.textContent = flowers;
    if (lc) lc.textContent = letters;
  }

  // --------------------------------------------------------------------------
  // BUCLE DE ANIMACIÓN PRINCIPAL (60 FPS)
  // --------------------------------------------------------------------------
  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    clock += 0.016;

    stars.update(clock);
    petals.update();
    flowerSystem.update();
    letterSystem.update();
    bloomingSunflower.update(clock);

    sceneController.render();
  }

  animate();
});
