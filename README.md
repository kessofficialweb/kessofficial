

<!---
kess0fficial/kess0fficial is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Innovators Engineering Club</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Orbitron:wght@500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-blue: #2A5C82;
            --accent-teal: #2EC4B6;
            --energy-orange: #FF9F1C;
            --light-bg: #F8F9FA;
            --dark-text: #2B2D42;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }
        body {
            line-height: 1.6;
            color: var(--dark-text);
        }
      /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-teal) 100%);
            padding: 1rem 2rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
      .logo {
            font-family: 'Orbitron', sans-serif;
            color: white;
            font-size: 1.8rem;
            text-decoration: none;
        }
        .nav-links {
            display: flex;
            gap: 2rem;
        }
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        /* Hero Section */
        .hero {
            background: linear-gradient(45deg, var(--primary-blue), var(--accent-teal));
            color: white;
            padding: 6rem 2rem;
            text-align: center;
        }
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            font-family: 'Orbitron', sans-serif;
        }
        /* Main Content Sections */
        .section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .section h2 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary-blue);
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
        /* Events Grid */
        .events-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .event-card {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        /* Contact Form */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        input, textarea {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        button {
            background: var(--energy-orange);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.1rem;
            transition: background 0.3s;
        }
        /* Footer */
        footer {
            background: var(--dark-text);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }       
          .hero h1 {
                font-size: 2.5rem;
            }
        }
  </style>
</head>
<body>
    <header>
        <nav>
            <a href="#" class="logo">TechInnovators</a>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#events">Events</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>

  <section class="hero">
        <h1>Engineering Tomorrow's Solutions</h1>
        <p>Join our community of innovators and problem solvers</p>
    </section>

  <section id="about" class="section">
        <h2>About Us</h2>
        <p>We are a student-led engineering collective focused on practical innovation and technological advancement. Our mission is to bridge classroom learning with real-world engineering challenges.</p>
    </section>

  <section id="events" class="section">
        <h2>Upcoming Events</h2>
        <div class="events-grid">
            <div class="event-card">
                <h3>Robotics Workshop</h3>
                <p>March 15 | Engineering Lab 3B</p>
            </div>
            <div class="event-card">
                <h3>CAD Design Challenge</h3>
                <p>March 22 | Virtual Event</p>
            </div>
        </div>
    </section>

  <section id="contact" class="section">
        <h2>Get Involved</h2>
        <form class="contact-form">
            <div class="form-group">
                <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </section>

  <footer>
        <p>&copy; 2024 Tech Innovators Engineering Club</p>
        <p>Follow us on [Social Media Links]</p>
    </footer>
</body>
</html>
