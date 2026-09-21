/* ==========================================================================
   AUDIO MANAGER - MÚSICA AMBIENTAL Y EFECTOS ROMÁNTICOS
   Pista oficial: Harry Styles - Coming Up Roses
   Efectos mágicos de campanillas con Web Audio API
   ========================================================================== */

import bgMusicUrl from './Harry Styles - Coming Up Roses (Official Lyric Video).mp3';

class AudioManager {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.audio = new Audio(bgMusicUrl);
    this.audio.loop = true;
    this.audio.volume = 0.65;
    this.fadeInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  play() {
    this.init();
    this.isPlaying = true;
    this.audio.volume = 0.65;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log('Audio autoplay pendiente de interacción del usuario:', err);
      });
    }
  }

  stop() {
    this.isPlaying = false;
    this.audio.pause();
  }

  // Sonido de carillón/campanitas mágicas al hacer clic en flor o carta y apertura de escena
  playChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0.0001, now + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.06, now + i * 0.07 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 1.2);
    });
  }
}

export const audioManager = new AudioManager();

