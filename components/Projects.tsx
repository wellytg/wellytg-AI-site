import React from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectLink } from '../types';

const ProjectLinkIcon: React.FC<{ type: ProjectLink['type'] }> = ({ type }) => {
    if (type === 'GitHub') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 5.426c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
            </svg>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4" aria-hidden="true">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
        </svg>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { title, description, tags, links, image, status, isShowcase } = project;
    
    const statusColor = status === 'Active' ? 'bg-green-400/10 text-green-300' : 
                        status === 'Archived' ? 'bg-slate-400/10 text-slate-300' :
                        'bg-blue-400/10 text-blue-300';
    
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                {isShowcase && image && (
                    <div className="sm:col-span-3">
                        <img src={image} alt={`${title} showcase`} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" loading="lazy" />
                    </div>
                )}
                <div className={`z-10 ${isShowcase && image ? 'sm:col-span-5' : 'sm:col-span-8'}`}>
                     <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${statusColor}`}>{status}</span>
                    </p>
                    <h3>
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">{title}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{description}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {tags.map(tag => (
                            <li key={tag} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tag}</div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3 flex items-center gap-4">
                        {links.map(link => (
                            <a key={link.type} href={link.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">
                                <ProjectLinkIcon type={link.type} />
                                {link.type}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
