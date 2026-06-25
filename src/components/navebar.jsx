import '../styles/navbar.css'

function Navbar({ theme, toggleTheme }) {
    return (

        <nav className="navbar">



            {/* CENTER — Nav Links */}
            <ul className="navbar-links">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>

            </ul>
            <a href="/AmritSagarSuhaney_Resume (1).pdf" download="AmritSagarSuhaney_Resume.pdf" className="download">Download CV</a>

            <div className="navbar-buttons">
                <a href="#contact" className="btn-contact">Contact Me</a>
                <button onClick={toggleTheme} className="btn-ship btn-theme" aria-label="Toggle theme">
                    {theme === 'dark' ? (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                            <span>Light Mode</span>
                        </>
                    ) : (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            <span>Dark Mode</span>
                        </>
                    )}
                </button>
            </div>


        </nav>
    )
}

export default Navbar
