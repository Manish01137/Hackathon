/* Lightweight interactions for the landing page.
   No external libs required. */

   document.addEventListener('DOMContentLoaded', function () {
    // Demo modal
    const demoBtn = document.getElementById('try-demo');
    const demoModal = document.getElementById('demo-modal');
    const closeDemo = document.getElementById('close-demo');
  
    function openModal() {
      demoModal.setAttribute('aria-hidden', 'false');
    }
    function closeModal() {
      demoModal.setAttribute('aria-hidden', 'true');
    }
    demoBtn?.addEventListener('click', openModal);
    closeDemo?.addEventListener('click', closeModal);
    demoModal?.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  
    // booking placeholder: open simple alert (replace with actual cal.com embed)
    document.getElementById('book-pilot')?.addEventListener('click', function () {
      alert('Booking a 30-day pilot — replace this with your calendar widget (cal.com / calendly embed).');
    });
  
    document.getElementById('open-booking')?.addEventListener('click', function () {
      alert('Open booking widget (demo).');
    });
  
    // contact form simple validation + submit demo
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const msg = formData.get('message')?.toString().trim();
  
        if (!name || !email || !msg) {
          alert('Please fill all fields before sending.');
          return;
        }
  
        // simple email regex
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        // simulate submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }
  
        setTimeout(() => {
          alert('Thanks! Your message has been received. We will contact you soon.');
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }
        }, 900);
      });
    }
  
    // small UX: scroll into view for sections from nav (if you add nav)
    // highlight featured plan on click
    const proPlan = document.getElementById('pro-plan');
    proPlan?.addEventListener('mouseenter', () => {
      proPlan.style.transform = 'translateY(-6px)';
    });
    proPlan?.addEventListener('mouseleave', () => {
      proPlan.style.transform = 'translateY(0)';
    });
  });
  
//conatct
