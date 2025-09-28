import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    My academic journey into cybersecurity began with a fascination for the intricate dance between digital innovation and security. This led me to pursue a PhD, where my research focuses on developing robust defense mechanisms against adversarial machine learning attacks and ensuring the privacy of data in distributed systems. I am passionate about bridging the gap between theoretical research and real-world application.
                </p>
                <p className="mb-4">
                    Throughout my academic and professional career, I have had the opportunity to contribute to various projects, from building secure software for enterprise clients to publishing research on novel cryptographic protocols. My goal is to engineer systems that are not only functional but also inherently secure and resilient against emerging threats.
                </p>
                <p>
                    When I’m not immersed in research papers or code, I enjoy contributing to open-source security tools, participating in CTF (Capture The Flag) competitions, and exploring the intersection of technology and ethics.
                </p>
            </div>
        </section>
    );
};

export default About;