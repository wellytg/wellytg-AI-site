import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import LinkedInPortfolio from './components/LinkedInPortfolio';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

const useIntersectionObserver = (setActiveSection: (section: string) => void) => {
    const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -40% 0px', threshold: 0.1 }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            currentRefs.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, [setActiveSection]);

    return (id: string) => (el: HTMLElement | null) => {
        if (el) {
            sectionRefs.current.set(id, el);
        } else {
            sectionRefs.current.delete(id);
        }
    };
};


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const setSectionRef = useIntersectionObserver(setActiveSection);

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <Header activeSection={activeSection} />
                <main className="pt-24 lg:w-1/2 lg:py-24">
                    <div ref={setSectionRef('about')}><About /></div>
                    <div ref={setSectionRef('linkedin')}><LinkedInPortfolio /></div>
                    <div ref={setSectionRef('projects')}><Projects /></div>
                    <div ref={setSectionRef('blog')}><Blog /></div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default App;
