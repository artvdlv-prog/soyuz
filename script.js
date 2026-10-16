document.addEventListener('DOMContentLoaded', () => {
  const visualFrame = document.querySelector('.visual-frame');
  const visualCore = document.querySelector('.visual-core');

  if (visualFrame && visualCore) {
    visualFrame.addEventListener('pointermove', (event) => {
      const rect = visualFrame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      visualCore.style.transform = `rotateX(${(-y * 16).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg) translateZ(0)`;
    });

    visualFrame.addEventListener('pointerleave', () => {
      visualCore.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
});
