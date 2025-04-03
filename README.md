<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Engineering Collective</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2B2D42;
            --accent: #EF233C;
            --neutral: #EDF2F4;
            --text: #2B2D42;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text);
            background: linear-gradient(150deg, #ffffff 0%, #f8f9fa 100%);
        }
        /* Header */
        .header {
            padding: 1.5rem;
            position: fixed;
            width: 100%;
            top: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(8px);
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-family: 'Libre Baskerville', serif;
            font-size: 1.8rem;
            color: var(--primary);
            text-decoration: none;
        }
        /* Hero Section */
        .hero {
            padding: 12rem 2rem 6rem;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }
        .hero-title {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            color: var(--primary);
        }
        /* Cards */
        .cards {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        /* Contact Form */
        .contact {
            max-width: 800px;
            margin: 6rem auto;
            padding: 0 2rem;
        }
        .form {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        input, textarea {
            width: 100%;
            padding: 1rem;
            margin-bottom: 1.5rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
        }
        .btn {
            background: var(--primary);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .btn:hover {
            background: var(--accent);
        }
        /* Footer */
        .footer {
            text-align: center;
            padding: 3rem;
            color: #666;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav">
            <a href="#" class="logo">Nexus</a>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#events">Events</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>
    <section class="hero">
        <h1 class="hero-title">Engineering Innovation Collective</h1>
        <p>Bridging academic excellence with real-world engineering solutions</p>
    </section>
    <div class="cards">
        <div class="card">
            <h3>Technical Workshops</h3>
            <p>Master cutting-edge tools through hands-on sessions with industry experts.</p>
        </div>
        <div class="card">
            <h3>Research Projects</h3>
            <p>Collaborate on impactful engineering research with faculty guidance.</p>
        </div>
        <div class="card">
            <h3>Competitions</h3>
            <p>Compete in national engineering challenges with full support.</p>
        </div>
    </div>
    <section class="contact">
        <div class="form">
            <h2>Join Our Community</h2>
            <form>
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email Address" required>
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button class="btn" type="submit">Submit Application</button>
            </form>
        </div>
    </section>
    <footer class="footer">
        <p>© 2024 Nexus Engineering Collective</p>
    </footer>
</body>
</html>
