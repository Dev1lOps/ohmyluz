
// Mobile menu toggle
document.getElementById('menuBtn')?.addEventListener('click', ()=>{
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
});
// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Quick form -> mailto
document.getElementById('quickForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const n = document.getElementById('qnombre').value.trim();
  const t = document.getElementById('qtel').value.trim();
  const z = document.getElementById('qzona').value.trim();
  const subject = 'Solicitud de llamada — Electricista 24/7';
  const body = `Nombre: ${n}\nTeléfono: ${t}\nZona: ${z}`;
  window.location.href = `mailto:hola@pagiopro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
// Contact form -> mailto
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = 'Contacto — Electricista 24/7';
  const body = `Nombre: ${name}\nTeléfono: ${phone}\nDirección/Zona: ${address}\n\nProblema:\n${message}`;
  window.location.href = `mailto:hola@pagiopro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
