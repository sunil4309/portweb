document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    const toggle = (e) => { e && e.stopPropagation(); navLinks.classList.toggle('active'); menuBtn.classList.toggle('active'); document.body.classList.toggle('menu-open'); };
    menuBtn.addEventListener('click', toggle); menuBtn.addEventListener('touchstart', toggle, {passive:true});
    document.addEventListener('click', (e)=>{ if (!navLinks.contains(e.target) && e.target !== menuBtn){ navLinks.classList.remove('active'); menuBtn.classList.remove('active'); document.body.classList.remove('menu-open'); } });
  }
  const header = document.querySelector('header.nav');
  const onScroll = ()=> { if (window.scrollY>20) header.classList.add('scrolled'); else header.classList.remove('scrolled'); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  const form = document.getElementById('contactForm'); const popup = document.getElementById('successPopup');
  if (form && popup) { form.addEventListener('submit', async (e)=>{ e.preventDefault(); const fd=new FormData(form); const action=form.getAttribute('action'); try{ const res=await fetch(action,{method:'POST',body:fd,headers:{Accept:'application/json'}}); if(res.ok){ form.reset(); popup.classList.add('show'); setTimeout(()=>popup.classList.remove('show'),1800);} else alert('Submission error'); }catch(err){ alert('Network error'); } }); }
});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
                                                        // Scroll glow
  const header = document.querySelector('header.nav');
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

                                                          // Contact form                                                       
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          popup.classList.add("show");

          // Hide popup after 3 seconds
          setTimeout(() => {
            popup.classList.remove("show");
          }, 3000);
        } else {
          alert("❌ Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("⚠️ Network error, please try again.");
      }
    });
  }
});


