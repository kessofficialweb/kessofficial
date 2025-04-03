
<!DOCTYPE html>
<html lang=”en”>
<head>
    <meta charset=”UTF-8”>
    <meta name=”viewport” content=”width=device-width, initial-scale=1.0”>
    <title>Nexus Engineering Collective</title>
    <link href=”https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@600;700&display=swap” rel=”stylesheet”>
    <style>
        :root {
            --gradient-1: #f3f4f6;
            --gradient-2: #e5e7eb;
            --primary: #1e40af;
            --accent: #3b82f6;
            --text: #1f2937;
            --text-light: #6b7280;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: ‘Inter’, sans-serif;
            color: var(--text);
            line-height: 1.6;
            background: linear-gradient(160deg, var(--gradient-1) 0%, var(--gradient-2) 100%);
            min-height: 100vh;
        }
        /* Header */
        header {
            padding: 1.5rem 5%;
            position: fixed;
            width: 100%;
            top: 0;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        nav {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-family: ‘Playfair Display’, serif;
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--primary);
            text-decoration: none;
            letter-spacing: -0.5px;
        }
        .nav-links {
            display: flex;
            gap: 2.5rem;
            align-items: center;
        }
        .nav-links a {
            text-decoration: none;
            color: var(--text);
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }
        .nav-links a::after {
            content: ‘’;
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.3s ease;
        }
        .nav-links a:hover::after {
            width: 100%;
        }
        /* Hero Section */
        .hero {
            padding: 15vh 5% 8rem;
            max-width: 1400px;
            margin: 0 auto;
            text-align: center;
        }
        .hero h1 {
            font-family: ‘Playfair Display’, serif;
            font-size: 4rem;
            line-height: 1.1;
            margin-bottom: 2rem;
            color: var(--primary);
            letter-spacing: -1.5px;
        }
        .hero p {
            font-size: 1.25rem;
            color: var(--text-light);
            max-width: 700px;
            margin: 0 auto 3rem;
        }
        /* Cards Section */
        .features {
            padding: 4rem 5%;
            max-width: 1400px;
            margin: 0 auto;
        }
        .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .card {
            background: white;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        .card h3 {
            font-family: ‘Playfair Display’, serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        .card p {
            color: var(--text-light);
            font-size: 1rem;
        }
        /* Contact Section */
        .contact {
            padding: 6rem 5%;
            max-width: 800px;
            margin: 0 auto;
        }
        .contact h2 {
            font-family: ‘Playfair Display’, serif;
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            color: var(--primary);
        }
        .contact-form {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        input, textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        input:focus, textarea:focus {
            outline: none;
            border-color: var(--accent);
        }
        button {
            background: var(--primary);
            color: white;
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease;
            width: 100%;
        }
        button:hover {
            background: var(--accent);
        }
        /* Footer */
        footer {
            padding: 3rem 5%;
            text-align: center;
            color: var(--text-light);
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            margin-top: 6rem;
        }
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }        
            .nav-links {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href=”#” class=”logo”>Nexus</a>
            <div class=”nav-links”>
                <a href=”#about”>About</a>
                <a href=”#events”>Events</a>
                <a href=”#projects”>Projects</a>
                <a href=”#contact”>Contact</a>
            </div>
        </nav>
    </header>
    <section class=”hero”>
        <h1>Engineering Excellence Through Collaboration</h1>
        <p>Pushing boundaries in technological innovation through interdisciplinary research and development</p>
    </section>
    <section class=”features”>
        <div class=”cards-container”>
            <div class=”card”>
                <h3>Technical Workshops</h3>
                <p>Hands-on sessions led by industry experts covering cutting-edge technologies and methodologies.</p>
            </div>
            <div class=”card”>
                <h3>Research Initiatives</h3>
                <p>Collaborative projects addressing real-world engineering challenges with academic and industry partners.</p>
            </div>
            <div class=”card”>
                <h3>Competition Teams</h3>
                <p>Participate in national and international engineering competitions with full institutional support.</p>
            </div>
        </div>
    </section>
    <section class=”contact”>
        <h2>Join Our Community</h2>
        <div class=”contact-form”>
            <form>
                <div class=”form-group”>
                    <input type=”text” placeholder=”Full Name” required>
                </div>
                <div class=”form-group”>
                    <input type=”email” placeholder=”Email Address” required>
                </div>
                <div class=”form-group”>
                    <textarea rows=”5” placeholder=”Your Message” required></textarea>
                </div>
                <button type=”submit”>Submit Application</button>
            </form>
        </div>
    </section>
    <footer>
        <p>&copy; 2024 Nexus Engineering Collective. All rights reserved.</p>
        <p style=”margin-top: 1rem;”>Designed with precision in Silicon Valley</p>
    </footer>
</body>
</html>



