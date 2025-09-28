import React from 'react';
import { LINKEDIN_DATA, SOCIALS } from '../constants';

const LinkedInPortfolio: React.FC = () => {
    const { summary, experience, certifications, skills } = LINKEDIN_DATA;
    const linkedInUrl = SOCIALS.find(s => s.name === 'LinkedIn')?.url || '#';

    const getSkillBadgeColor = (level: 'Expert' | 'Advanced' | 'Intermediate') => {
        switch (level) {
            case 'Expert': return 'bg-sky-400/10 text-sky-300 ring-sky-400/20';
            case 'Advanced': return 'bg-teal-400/10 text-teal-300 ring-teal-400/20';
            case 'Intermediate': return 'bg-amber-400/10 text-amber-300 ring-amber-400/20';
        }
    }

    return (
        <section id="linkedin" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="LinkedIn Portfolio Snapshot">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">LinkedIn Snapshot</h2>
            </div>

            <div className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                 <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 relative p-4 rounded-lg">
                    <p className="mb-4 text-sm leading-normal">{summary}</p>
                    
                    <h3 className="text-md font-bold text-slate-200 mt-6 mb-2">Work Experience</h3>
                    <ol className="relative border-l border-slate-700">
                        {experience.map((exp, index) => (
                             <li key={index} className="mb-6 ml-4">
                                <div className="absolute w-3 h-3 bg-slate-500 rounded-full mt-1.5 -left-1.5 border border-slate-900"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-slate-500">{exp.period}</time>
                                <h4 className="text-base font-semibold text-slate-200">{exp.role} at {exp.company}</h4>
                                <p className="text-sm font-normal text-slate-400">{exp.description}</p>
                            </li>
                        ))}
                    </ol>

                     <h3 className="text-md font-bold text-slate-200 mt-8 mb-4">Licenses & Certifications</h3>
                     <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div>
                                    <p className="font-semibold text-slate-200">{cert.name}</p>
                                    <p className="text-sm text-slate-500">{cert.issuer} · {cert.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-md font-bold text-slate-200 mt-8 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className={`flex items-center rounded-md px-3 py-1 text-xs font-medium ring-1 ring-inset ${getSkillBadgeColor(skill.level)}`}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                    
                    <div className="mt-8">
                         <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-slate-200 hover:text-teal-300 group">
                            View Full Profile on LinkedIn
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkedInPortfolio;
