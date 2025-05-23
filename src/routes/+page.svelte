<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let idleTimeout: ReturnType<typeof setTimeout> | null = null;
  let currentSectionIndex = 0;
  const sectionIds = ['hero', 'about', 'projects', 'tech', 'resume', 'contact'];
  let scrolling = false;
  let userHasScrolled = false;
  let initialIdleTriggered = false;

  function scrollToSection(index: number) {
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      scrolling = true;
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => (scrolling = false), 2500);
    }
  }

  function resetIdleTimer() {
    if (idleTimeout) clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      if (!scrolling && currentSectionIndex < sectionIds.length - 1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
        resetIdleTimer();
      }
    }, 6000);
  }

  function initialIdleCheck() {
    if (idleTimeout) clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      if (!scrolling && !userHasScrolled && !initialIdleTriggered) {
        initialIdleTriggered = true;
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
        resetIdleTimer();
      }
    }, 5000);
  }

  function handleUserInteraction() {
    if (scrolling) return;
    userHasScrolled = true;
    if (!initialIdleTriggered) {
      clearTimeout(idleTimeout);
    } else {
      resetIdleTimer();
    }
  }

  onMount(() => {
    if (!browser) return;

    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((el) => observer.observe(el));

    ['mousemove', 'keydown', 'scroll', 'click', 'wheel'].forEach((evt) => {
      window.addEventListener(evt, handleUserInteraction);
    });

    initialIdleCheck();
  });
</script>

<main class="min-h-screen text-black font-sans relative overflow-x-hidden">
<!-- Hero Section -->
<section id="hero" class="flex flex-col items-center justify-center h-screen text-center px-4 bg-white">
  <img src="/ajlpfp.PNG" alt="Antonio profile" class="w-64 h-64 rounded-full border-2 border-black shadow-lg mb-6" />
  <h1 class="text-6xl md:text-7xl font-bold text-black tracking-tight font-serif">
    Antonio Llanes
  </h1>
  <p class="fade-section opacity-0 translate-y-6 transition-all duration-1000 mt-4 text-lg text-black font-light font-sans">Full-stack developer and creative technologist focused on building performant, user-driven digital experiences.</p>
</section>

<!-- Transition Ombre Strip -->
<section class="h-16 w-full bg-gradient-to-b from-white to-yellow-100"></section>

<!-- About Section -->
<section id="about" class="px-8 py-16 max-w-3xl mx-auto bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 text-center font-serif">About Me</h2>
    <p class="text-base leading-relaxed text-black text-center">
      I’m Antonio Llanes — a freshly minted Computer Science grad from Florida State University, born and raised in the heart of Miami: Hialeah. I'm a proud first-generation American of Cuban origin who’s been tapping away at keyboards since before I could even form full sentences.
    </p>
    <p class="text-base leading-relaxed text-black text-center mt-4">
      Raised by the internet and captivated by both its usefulness and absurd charm, I grew up seeing tech as both a tool and a playground. Whether I’m engineering full-stack web experiences or discovering a clever animation library, I’m always searching for ways to make the digital feel intuitive, expressive, and a little bit delightful.
    </p>
    <p class="text-base leading-relaxed text-black text-center mt-4">
      Adaptable by nature and obsessed with learning, I thrive in fast-paced environments, collaborate with enthusiasm, and pick up new tools like it's my favorite sport (because it kind of is). I'm ready to build, ship, and shine — let’s make something beautiful together.
    </p>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="px-8 py-16 max-w-5xl mx-auto bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold mb-8 text-black text-center font-serif">Projects</h2>
    <div class="grid gap-8 md:grid-cols-2">
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
        <h3 class="text-xl font-semibold text-black font-mono">VintageMemere.com</h3>
        <p class="text-black text-sm font-light">A curated e-commerce platform for vintage resale built using Django, Stripe API, AWS S3, PostgreSQL, and deployed via Render.</p>
        <div class="mt-2 flex flex-col gap-1">
          <a href="https://www.vintagememere.com" target="_blank" class="inline-block text-sm text-orange-500 hover:text-black underline">✨ Visit VintageMemere.com</a>
          <a href="https://github.com/antoniollanes/vintage" target="_blank" class="inline-block text-sm text-orange-500 hover:text-black underline">View GitHub Repo →</a>
        </div>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
        <h3 class="text-xl font-semibold text-black font-mono">AntonioLlanes.com</h3>
        <p class="text-black text-sm font-light">My portfolio site — this one! Built with SvelteKit, TailwindCSS, TypeScript, and deployed with Firebase.</p>
        <a href="https://github.com/antoniollanes/antoniollanes-site" target="_blank" class="inline-block text-sm text-orange-500 hover:text-black underline mt-2">View GitHub Repo →</a>
      </div>
    </div>
  </div>
</section>

<!-- Tech Stack Section -->
<section id="tech" class="px-8 py-16 max-w-4xl mx-auto bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 text-center font-serif">Tech Stack</h2>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-black font-mono">
      <li>🧠 TypeScript</li>
      <li>💻 SvelteKit</li>
      <li>🎨 TailwindCSS</li>
      <li>🌐 React</li>
      <li>🧠 Node.js / Express</li>
      <li>🔥 Firebase</li>
      <li>☁️ AWS S3</li>
      <li>🧾 Stripe API</li>
      <li>🐘 PostgreSQL</li>
      <li>🪟 C# / .NET MAUI</li>
      <li>🧪 Flask</li>
      <li>🤖 ChatGPT API (OpenAI)</li>
      <li>🖼️ DALL·E Image Gen</li>
      <li>📜 C++, C, HTML, CSS, Python, Java, JavaScript, Luau, MIPS Assembly</li>
    </ul>
  </div>
</section>

<!-- Resume Section -->
<section id="resume" class="px-8 py-16 max-w-5xl mx-auto text-center bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 font-serif">Résumé</h2>
    <object data="/AJL_resume.pdf" type="application/pdf" width="100%" height="600px" class="rounded-md shadow-lg" aria-label="Antonio Llanes Resume" title="Antonio Llanes Resume PDF">
      <p class="text-black">Your browser does not support PDFs. <a href="/AJL_resume.pdf" class="underline">Download it here</a>.</p>
    </object>
    <div class="mt-6">
      <a href="/AJL_resume.pdf" download class="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg shadow hover:bg-gray-900 transition">
        Download PDF Résumé
      </a>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="px-8 py-16 max-w-3xl mx-auto text-center bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 font-serif">Contact</h2>
    <p class="text-black mb-6 text-sm font-light">
      Reach out via <a href="mailto:antoniojllanes@gmail.com" class="underline text-black hover:text-orange-500">email</a> or find me on
      <a href="https://github.com/antoniollanes" class="underline text-black hover:text-orange-500">GitHub</a>.
    </p>
  </div>
</section>

<footer class="text-center py-8 text-xs text-black bg-yellow-100 font-sans">
  Built by Antonio Llanes • © 2025
</footer>
</main>

<style>
  :global(html) {
    background-color: #fef9c3;
    scroll-behavior: smooth;
  }
  :global(body) {
    background-color: transparent;
    font-family: 'EB Garamond', serif;
  }
</style>