import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
    // Find LinkedIn and GitHub links from SOCIALS to display prominently
    const linkedIn = SOCIALS.find(s => s.name === 'LinkedIn');
    const github = SOCIALS.find(s => s.name === 'GitHub');

    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p className="mb-4">
                For collaboration or inquiries, the best way to reach me is via{' '}
                {linkedIn && <a href={linkedIn.url} className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">LinkedIn</a>} or by reviewing my work on{' '}
                {github && <a href={github.url} className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">GitHub</a>}.
            </p>
            <p>
                Coded in <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Visual Studio Code</a>.
                Built with <a href="https://reactjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">React</a> &amp; <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>,
                and deployed on GitHub Pages. This portfolio design is inspired by the work of {' '}
                <a href="https://brittanychiang.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Brittany Chiang</a>.
            </p>
        </footer>
    );
};

export default Footer;
