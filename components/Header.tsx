import React from 'react';
import { SOCIALS } from '../constants';
import { SocialLink } from '../types';

interface HeaderProps {
    activeSection: string;
}

const NavLink: React.FC<{ href: string, text: string, isActive: boolean }> = ({ href, text, isActive }) => (
    <li>
        <a className="group flex items-center py-3" href={href}>
            <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${isActive ? 'w-16 bg-white' : ''}`}></span>
            <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${isActive ? 'text-white' : ''}`}>{text}</span>
        </a>
    </li>
);

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Wellington Gwavava</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Cybersecurity PhD Candidate
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build secure, resilient, and cutting-edge digital systems through research and engineering.
                </p>

                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <NavLink href="#about" text="About" isActive={activeSection === 'about'} />
                        <NavLink href="#linkedin" text="LinkedIn" isActive={activeSection === 'linkedin'} />
                        <NavLink href="#projects" text="Projects" isActive={activeSection === 'projects'} />
                        <NavLink href="#blog" text="Blog" isActive={activeSection === 'blog'} />
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                {SOCIALS.map((social: SocialLink) => (
                    <li key={social.name} className="mr-5 shrink-0">
                        <a 
                            className="block hover:text-slate-200" 
                            href={social.url} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label={`${social.name} (opens in a new tab)`}
                        >
                            <span className="sr-only">{social.name}</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="h-6 w-6" 
                                aria-hidden="true"
                            >
                                <path d={social.iconPath} />
                            </svg>
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;