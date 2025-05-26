<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

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
  });
</script>

<main class="min-h-screen text-black font-sans relative overflow-x-hidden bg-white">
  <!-- Hero Section -->
  <section class="flex flex-col items-center justify-center h-screen text-center px-4 bg-white">
    <img src="/ajlpfp.PNG" alt="Antonio profile" class="w-64 h-64 rounded-full border-2 border-black shadow-lg mb-6" />
    <h1 class="text-6xl md:text-7xl font-bold text-black tracking-tight font-serif">
      Antonio Llanes
    </h1>
    <p class="fade-section opacity-0 translate-y-6 transition-all duration-1000 mt-4 text-lg text-black font-light font-sans">
      Full-stack developer and creative technologist focused on building performant, user-driven digital experiences.
    </p>
  </section>

  <!-- Transition Ombre Strip -->
  <section class="h-16 w-full bg-gradient-to-b from-white to-yellow-100"></section>

  <!-- About Section -->
  <section id="about" class="w-full bg-yellow-100 py-16 font-sans">
    <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 px-8 max-w-3xl mx-auto">
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
  <section id="projects" class="w-full bg-yellow-100 py-16 font-sans">
    <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 px-8 max-w-5xl mx-auto">
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
  <section id="tech" class="w-full bg-yellow-100 py-16 font-sans">
    <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 px-8 max-w-4xl mx-auto">
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
  <section id="resume" class="w-full bg-yellow-100 py-16 font-sans">
    <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 px-8 max-w-5xl mx-auto text-center">
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
  <section id="contact" class="w-full bg-yellow-100 py-16 font-sans">
    <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 px-8 max-w-3xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-black mb-6 font-serif">Connect with me!</h2>

      <div class="flex justify-center gap-8 items-center text-black">
        <!-- Email -->
        <a href="mailto:antoniojllanes@gmail.com" class="flex flex-col items-center hover:text-orange-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4l8 8 8-8" />
          </svg>
          <span class="text-sm">Email</span>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/antoniollanes" target="_blank" class="flex flex-col items-center hover:text-orange-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6a4.8 4.8 0 011.3-3.3 4.5 4.5 0 01.1-3.2s1-.3 3.3 1.3a11.4 11.4 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3a4.5 4.5 0 01.1 3.2 4.8 4.8 0 011.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.1.9 2.2v3.2c0 .3.2.7.8.6A12 12 0 0024 12.5C24 5.9 18.6.5 12 .5z"/>
          </svg>
          <span class="text-sm">GitHub</span>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/antoniojllanes" target="_blank" class="flex flex-col items-center hover:text-orange-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.8 20h-3v-11h3v11zm-1.5-12.3c-1 0-1.6-.8-1.6-1.6s.6-1.7 1.6-1.7 1.6.7 1.6 1.6-.7 1.7-1.6 1.7zm14.3 12.3h-3v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8v5.5h-3v-11h2.9v1.5h.1a3.2 3.2 0 012.8-1.6c3 0 3.6 2 3.6 4.7v6.4z"/>
          </svg>
          <span class="text-sm">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>

  <footer class="text-center py-8 text-xs text-black bg-yellow-100 font-sans">
    Built by Antonio Llanes • © 2025
  </footer>
</main>

<style>
  :global(html) {
    background-color: white;
  }
  :global(body) {
    background-color: white;
    font-family: 'EB Garamond', serif;
  }
</style>
