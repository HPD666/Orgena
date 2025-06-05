<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Orgena — Code Like You Speak</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700,400&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', Arial, sans-serif;
      margin: 0;
      background: #f9f9ff;
      color: #22223b;
      line-height: 1.6;
    }
    header {
      background: #6c63ff;
      color: #fff;
      padding: 40px 20px 30px 20px;
      text-align: center;
    }
    header h1 {
      margin: 0 0 14px 0;
      font-size: 2.8rem;
      letter-spacing: -2px;
    }
    header p {
      color: #e0e0ff;
      font-size: 1.2rem;
      margin-bottom: 1.2em;
    }
    .badges {
      margin-bottom: 1.5em;
    }
    .badges img {
      margin-right: 7px;
      vertical-align: middle;
    }
    .main-buttons {
      display: flex;
      justify-content: center;
      gap: 18px;
      flex-wrap: wrap;
      margin: 25px 0 0 0;
    }
    .main-btn {
      border: none;
      font-size: 1.08rem;
      font-weight: 700;
      border-radius: 22px;
      padding: 14px 32px;
      color: #fff;
      cursor: pointer;
      transition: background 0.17s, transform 0.12s;
      box-shadow: 0 4px 18px rgba(0,0,0,0.09);
      outline: none;
      margin: 0;
      text-decoration: none;
      display: inline-block;
    }
    .main-btn.tutorial {
      background: #2563eb;
    }
    .main-btn.tutorial:hover { background: #1d4ed8; }
    .main-btn.web {
      background: #22c55e;
    }
    .main-btn.web:hover { background: #16a34a; }
    .main-btn.download {
      background: #7c3aed;
    }
    .main-btn.download:hover { background: #5b21b6; }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 7px 30px rgba(108,99,255,0.08);
      padding: 36px 20px 32px 20px;
      margin-top: -24px;
      margin-bottom: 30px;
    }
    h2 {
      color: #6c63ff;
      margin-top: 1.7em;
      margin-bottom: 0.6em;
    }
    ul, ol {
      padding-left: 21px;
    }
    pre {
      background: #22223b;
      color: #e7e7ff;
      border-radius: 12px;
      padding: 18px;
      font-size: 1.05rem;
      overflow-x: auto;
      margin: 12px 0 24px 0;
      font-family: 'Fira Mono', 'Consolas', monospace;
      line-height: 1.5;
    }
    code {
      background: #ededfa;
      color: #333;
      padding: 2px 7px;
      border-radius: 6px;
      font-family: 'Fira Mono', 'Consolas', monospace;
      font-size: 0.98em;
    }
    .feature-list {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin: 24px 0 0 0;
      justify-content: left;
    }
    .feature-card {
      background: #f3f3fe;
      border-radius: 10px;
      padding: 15px 16px 11px 16px;
      min-width: 170px;
      flex: 1;
      color: #22223b;
      font-size: 1.04rem;
      margin-bottom: 0;
      box-shadow: 0 2px 10px rgba(108,99,255,0.05);
    }
    .feature-card strong {
      color: #6c63ff;
      font-size: 1.13rem;
      display: block;
      margin-bottom: 5px;
    }
    .github-section {
      text-align: center;
      margin-top: 35px;
    }
    .github-link {
      font-size: 1.15rem;
      color: #fff;
      background: #24292f;
      padding: 16px 36px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
      margin-top: 12px;
      transition: background 0.15s;
    }
    .github-link:hover {
      background: #444b56;
    }
    .footer {
      text-align: center;
      margin: 50px 0 18px 0;
      color: #a0a0b2;
      font-size: 1.01rem;
    }
    @media (max-width: 800px) {
      .feature-list {
        flex-direction: column;
        gap: 10px;
      }
      .container {
        padding: 18px 6vw 24px 6vw;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Orgena — Code Like You Speak</h1>
    <p>Beginner-friendly, English-like scripting language. Write code as you speak — no cryptic symbols, just plain language.</p>
    <div class="badges">
      <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-purple.svg"></a>
      <a href="https://hpd666.github.io/Orgena-Web/"><img alt="Live Demo" src="https://img.shields.io/badge/Try%20Online-Orgena%20Web-blue?logo=google-chrome"></a>
      <a href="https://hpd666.github.io/Orgena-Code/?"><img alt="Tutorial" src="https://img.shields.io/badge/Tutorial-Launch%20Now-orange"></a>
    </div>
    <div class="main-buttons">
      <a href="https://hpd666.github.io/Orgena-Code/?" target="_blank" class="main-btn tutorial">📘 Launch Tutorial</a>
      <a href="https://hpd666.github.io/Orgena-Web/" target="_blank" class="main-btn web">🚀 Launch On Web</a>
      <a href="Orgena-1.0.zip" download class="main-btn download">⬇️ Download Orgena 1.0</a>
    </div>
  </header>
  <div class="container">
    <h2>🚀 What is Orgena?</h2>
    <p>
      Orgena lets anyone code in plain English.<br>
      It’s designed for learning, teaching, prototyping, and fun—without installation or stress.
    </p>
    <ul>
      <li><strong>Natural English Syntax:</strong> No weird brackets or colons.</li>
      <li><strong>Instant Feedback:</strong> Run scripts instantly in your browser.</li>
      <li><strong>Safe and Simple:</strong> No setup, no risk, just creativity.</li>
    </ul>

    <h2>🌟 Features</h2>
    <div class="feature-list">
      <div class="feature-card">
        <strong>Plain English</strong>
        Write code in real sentences anyone can read.
      </div>
      <div class="feature-card">
        <strong>120+ Abilities</strong>
        Variables, lists, math, strings, control flow, functions, input, and more.
      </div>
      <div class="feature-card">
        <strong>Runs in Browser</strong>
        No installation required, just open and code.
      </div>
      <div class="feature-card">
        <strong>Perfect for Learning</strong>
        Ideal for beginners, teachers, kids, and hobbyists.
      </div>
    </div>

    <h2>🖥️ Try Orgena Online</h2>
    <ul>
      <li><a href="https://hpd666.github.io/Orgena-Web/" target="_blank"><strong>Launch Orgena-Web</strong></a></li>
      <li><a href="https://hpd666.github.io/Orgena-Code/?" target="_blank"><strong>Interactive Tutorial</strong></a></li>
      <li><a href="Orgena-1.0.zip" download><strong>Download Orgena 1.0 ⬇️</strong></a></li>
    </ul>

    <h2>📝 Example Code</h2>
    <pre>
Say "Hello, world!"
Remember name is "Alice"
Say "Hello, " plus name

Add "apple" to fruits
Add "banana" to fruits
For each fruit in fruits,
  Say fruit
End

If age is greater than 18, Say "You are an adult."
    </pre>

    <h2>📚 Getting Started</h2>
    <ol>
      <li>
        <strong>Try it online:</strong>
        <a href="https://hpd666.github.io/Orgena-Web/" target="_blank">Orgena Web IDE</a>
      </li>
      <li>
        <strong>Download:</strong>
        <a href="Orgena-1.0.zip" download>Orgena 1.0 ZIP</a>
      </li>
      <li>
        <strong>Or start the tutorial:</strong>
        <a href="https://hpd666.github.io/Orgena-Code/?" target="_blank">Interactive Tutorial</a>
      </li>
    </ol>
    <p>
      <strong>No installation needed.</strong> Just open Orgena-Web or unzip and open the <code>index.html</code> file in your browser.
    </p>

    <h2>🔍 More Examples</h2>
    <pre>
# Loops & Lists
Add 1 to numbers
Add 2 to numbers
Add 3 to numbers
For each x in numbers,
  Say x times 2
End

# User Input
Ask for name
Say "Welcome, " plus name

# Math and Built-ins
Say sqrt of 25
Say random between 1 and 10
    </pre>

    <h2>🤝 Contributing</h2>
    <ul>
      <li>Found a bug? Have a feature request? <a href="https://github.com/HPD666/Orgena/issues" target="_blank">Open an issue</a> or submit a pull request!</li>
      <li>Want to add new commands? See the interpreter logic in the <code>.js</code> source—it's easy to extend.</li>
    </ul>

    <h2>📄 License</h2>
    <p>
      Orgena is released under the <a href="LICENSE">MIT License</a>.<br>
      Created by <a href="https://github.com/HPD666" target="_blank">HPD666</a> and contributors.
    </p>
  </div>

  <div class="github-section">
    <a href="https://github.com/HPD666/Orgena" target="_blank" class="github-link">⭐ Star Orgena on GitHub</a>
  </div>

  <div class="footer">
    Made with ❤️ by the Orgena team.<br>
    <a href="https://github.com/HPD666/Orgena" style="color:#6c63ff;" target="_blank">Contribute or learn more on GitHub</a>
  </div>
</body>
</html>
