import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.webp', '**/*.png', '**/*.jpg']
    }
  }
});
