<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let showScrollHint = true;

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

    const handleScroll = () => {
      showScrollHint = false;
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);
  });
</script>

<main class="min-h-screen text-black font-sans relative overflow-x-hidden">
<!-- Hero Section -->
<section class="flex flex-col items-center justify-center h-screen text-center px-4 bg-white relative">
  <img src="/ajlpfp.PNG" alt="Antonio profile" class="w-64 h-64 rounded-full border-2 border-black shadow-lg mb-6" />
  <h1 class="text-6xl md:text-7xl font-bold text-black tracking-tight font-serif">
    Antonio Llanes
  </h1>
  <p class="fade-section opacity-0 translate-y-6 transition-all duration-1000 mt-4 text-lg text-black font-light font-sans">Full-stack developer and creative technologist focused on building performant, user-driven digital experiences.</p>
  {#if showScrollHint}
    <div class="absolute bottom-6 animate-bounce text-black text-sm font-light">↓ Scroll down</div>
  {/if}
</section>

<!-- Transition Ombre Strip -->
<section class="h-16 w-full bg-gradient-to-b from-white to-yellow-100"></section>

<!-- About Section -->
<section class="px-8 py-16 w-full mx-auto bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 text-center font-serif">About Me</h2>
    <p class="text-base leading-relaxed text-black text-center">
      I’m Antonio Llanes, a freshly minted Computer Science grad from Florida State University, born and raised in the heart of Miami: Hialeah. I'm a proud first-generation American of Cuban origin who’s been tapping away at keyboards since before I could even form full sentences.
    </p>
    <p class="text-base leading-relaxed text-black text-center mt-4">
      Raised by the internet and captivated by both its usefulness and absurd charm, I grew up seeing tech as both a tool and a playground. Whether I’m engineering full-stack web experiences or discovering a clever animation library, I’m always searching for ways to make the digital feel intuitive, expressive, and a little bit delightful.
    </p>
    <p class="text-base leading-relaxed text-black text-center mt-4">
    Adaptable by nature and obsessed with learning, I thrive in fast-paced environments, collaborate with enthusiasm, and pick up new tools like it's my favorite sport (because it kind of is). I'm ready to build, ship, and shine, let’s make something beautiful together!
    </p>
  </div>
</section>

<!-- Projects Section -->
<section class="px-8 py-16 w-full mx-auto bg-yellow-100 font-sans">
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
<section class="px-8 py-16 w-full mx-auto bg-yellow-100 font-sans">
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
<section class="px-8 py-16 w-full mx-auto text-center bg-yellow-100 font-sans">
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
<section class="px-8 py-16 w-full mx-auto text-center bg-yellow-100 font-sans">
  <div class="fade-section opacity-0 translate-y-6 transition-all duration-1000 p-6">
    <h2 class="text-4xl font-bold text-black mb-4 font-serif">Connect with Me!</h2>
    <div class="flex justify-center gap-8 text-black text-lg">
      <a href="mailto:antoniojllanes@gmail.com" class="hover:text-orange-500 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6l-10 7L2 6"/></svg>
        Email
      </a>
      <a href="https://github.com/antoniollanes" target="_blank" rel="noopener noreferrer" class="hover:text-orange-500 flex items-center gap-2">
        <svg class="w-6 h-6" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.996.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.004 2.047.138 3.003.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.649.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.104.823 2.224v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>      
      
      <a href="https://www.linkedin.com/in/antonio-llanes/" class="hover:text-orange-500 flex items-center gap-2">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM7.1 20.5h-3.4v-11h3.4v11zM5.4 8.3c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2s2 .9 2 2c0 1.1-.9 2-2 2zM20.5 20.5h-3.4v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v5.9h-3.4s.1-9.6 0-10.6h3.4v1.5c.5-.8 1.3-1.9 3.2-1.9 2.4 0 4.2 1.6 4.2 5.1v5.9z"/></svg>
        LinkedIn
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
