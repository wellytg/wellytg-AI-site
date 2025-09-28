import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

// A simple component to render markdown-like content from the string
const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
    const formattedContent = content
        .trim()
        .split('\n')
        .map(line => {
            if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
            if (line.startsWith('1. ')) return `<li>${line.substring(3)}</li>`;
            if (line.startsWith('-   ')) return `<li class="ml-4 list-disc">${line.substring(4)}</li>`;
            if (line.startsWith('```')) return `<pre class="bg-slate-800 p-3 rounded-md text-sm my-2 overflow-x-auto"><code>${line.substring(3, line.length - 3)}</code></pre>`;
            return `<p>${line}</p>`;
        })
        .join('');

    return <div className="text-slate-400 space-y-4" dangerouslySetInnerHTML={{ __html: formattedContent }} />;
};

const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
        <div 
            className="bg-slate-900 border border-slate-700 rounded-lg p-6 md:p-8 max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
        >
            <div className="flex justify-between items-start">
                 <div>
                    <h2 className="text-xl font-bold text-slate-200">{post.title}</h2>
                    <p className="text-sm text-slate-500 mt-1">{post.date}</p>
                </div>
                <button 
                    onClick={onClose} 
                    className="text-slate-400 hover:text-white"
                    aria-label="Close post"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="mt-4">
                <MarkdownContent content={post.content} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <div key={tag} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tag}</div>
                ))}
            </div>
        </div>
    </div>
);


const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog">
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Blog</h2>
            </div>
            <div>
                <ul className="group/list">
                    {BLOG_POSTS.map(post => (
                        <li key={post.slug} className="mb-12">
                             <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:col-span-8">
                                    <p className="text-sm text-slate-500">{post.date}</p>
                                    <h3 className="font-medium text-slate-200 mt-1">{post.title}</h3>
                                    <p className="mt-2 text-sm leading-normal text-slate-400">{post.excerpt}</p>
                                    <button onClick={() => setSelectedPost(post)} className="mt-3 inline-flex items-center text-sm font-medium text-teal-300 hover:text-teal-200">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4"><path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
        </section>
    );
};

export default Blog;
