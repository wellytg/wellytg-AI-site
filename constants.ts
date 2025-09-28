import { Project, SocialLink, LinkedInProfile, BlogPost } from './types';
import { SOCIAL_ICON_PATHS } from './constants-icons';

export const LINKEDIN_DATA: LinkedInProfile = {
    summary: "PhD Candidate with a focus on adversarial machine learning and privacy-preserving technologies. Proven expertise in developing secure, scalable systems and contributing to cutting-edge academic research. Skilled in threat modeling, cryptographic protocol implementation, and secure software development practices.",
    experience: [
        {
            company: "University of Tech",
            role: "Research Assistant & PhD Candidate",
            period: "Aug 2020 – Present",
            description: "Conducting research on the security of federated learning systems. Published 3 papers in top-tier cybersecurity conferences. Developed a novel defense mechanism against data poisoning attacks, improving model resilience by 25%."
        },
        {
            company: "SecureSoft Inc.",
            role: "Cybersecurity Intern",
            period: "May 2022 – Aug 2022",
            description: "Performed penetration testing and vulnerability assessments on web applications. Developed internal security tools using Python and Go to automate threat detection and response."
        }
    ],
    certifications: [
        { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC²", date: "Issued Jun 2023", link: "#" },
        { name: "Offensive Security Certified Professional (OSCP)", issuer: "Offensive Security", date: "Issued Sep 2022", link: "#" },
    ],
    skills: [
        { name: "Python", level: "Expert" },
        { name: "Go", level: "Advanced" },
        { name: "Cryptography", level: "Expert" },
        { name: "Machine Learning", level: "Advanced" },
        { name: "Network Security", level: "Expert" },
        { name: "Penetration Testing", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Docker & K8s", level: "Intermediate" },
    ]
};

export const PROJECTS: Project[] = [
    {
        title: "AdversarialML Guard: A Robust Defense Framework",
        description: "A Python-based framework for detecting and mitigating adversarial attacks on machine learning models. Implemented novel differential privacy techniques and model distillation to enhance security. This was a core part of my PhD research.",
        tags: ["Python", "TensorFlow", "Differential Privacy", "Security Research"],
        links: [
            { type: "GitHub", url: "#" },
            { type: "Case Study", url: "#" },
        ],
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400&auto=format&fit=crop",
        status: "Active",
        isShowcase: true,
    },
    {
        title: "Decentralized Identity Management System",
        description: "Developed a proof-of-concept decentralized identity (DID) system using blockchain technology. The system allows users to control their own identity data without relying on a central authority, improving privacy and security.",
        tags: ["Go", "Blockchain", "Cryptography", "DID"],
        links: [
            { type: "GitHub", url: "#" },
        ],
        status: "Completed",
    },
    {
        title: "Automated Threat Intelligence Platform",
        description: "Built a platform that aggregates threat intelligence from various open-source feeds, analyzes it using NLP techniques, and provides actionable insights to security teams. The backend is built with Node.js and the frontend with React.",
        tags: ["Node.js", "React", "TypeScript", "NLP", "Elasticsearch"],
        links: [
            { type: "GitHub", url: "#" },
            { type: "Demo", url: "#" },
        ],
        status: "Archived",
    },
];


export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "zero-knowledge-proofs-explained",
        title: "A Practical Introduction to Zero-Knowledge Proofs",
        date: "October 15, 2023",
        excerpt: "Demystifying the magic behind Zero-Knowledge Proofs (ZKPs) and exploring their potential to revolutionize privacy and authentication on the web...",
        tags: ["Cryptography", "Security", "Web3"],
        content: `
### What are Zero-Knowledge Proofs?

Zero-Knowledge Proofs (ZKPs) are a fascinating cryptographic method where one party (the prover) can prove to another party (the verifier) that they know a value *x*, without conveying any information apart from the fact that they know the value *x*.

Imagine you have a secret key to a digital vault. With a ZKP, you could prove to someone that you have the key without ever showing it to them.

### Why are they important?
1.  **Privacy:** Users can authenticate themselves without revealing sensitive information.
2.  **Scalability:** In blockchains, ZKPs can be used to validate transactions without processing the entire transaction data, leading to solutions like ZK-Rollups.
3.  **Security:** They minimize the attack surface by reducing the amount of shared secret information.

\`\`\`python
# This is a conceptual code snippet
def verify_proof(proof, public_input):
    # Complex math happens here
    return is_valid(proof, public_input)
\`\`\`

This technology is still evolving but holds immense promise for building a more secure and private digital world.
        `
    },
    {
        slug: "securing-llms",
        title: "The Challenge of Securing Large Language Models (LLMs)",
        date: "September 5, 2023",
        excerpt: "Large Language Models are powerful, but they also introduce new security vulnerabilities. This post explores the concepts of prompt injection, data poisoning, and other emerging threats...",
        tags: ["AI Security", "LLM", "Machine Learning"],
        content: `
### The New Frontier of AI Security

As Large Language Models (LLMs) like GPT-4 become more integrated into our applications, they create new and complex attack surfaces. Traditional security measures are often not enough.

### Key Vulnerabilities

-   **Prompt Injection:** An attacker can manipulate the LLM's output by crafting malicious inputs. This can be used to bypass filters or trick the model into revealing sensitive information.
-   **Data Poisoning:** The training data of an LLM can be contaminated with malicious examples, leading the model to learn incorrect or harmful behaviors.
-   **Model Inversion Attacks:** Attackers may be able to reconstruct parts of the training data by carefully querying the model, leading to privacy breaches.

Securing these models requires a multi-layered approach, including input sanitization, output validation, and continuous monitoring for anomalous behavior.
`
    }
];

export const SOCIALS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/wellytg', iconPath: SOCIAL_ICON_PATHS.github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/welly-t-205b38b0/', iconPath: SOCIAL_ICON_PATHS.linkedin },
    { name: 'Google Scholar', url: '#', iconPath: SOCIAL_ICON_PATHS.scholar },
    { name: 'Twitter', url: 'https://twitter.com/welly_tg', iconPath: SOCIAL_ICON_PATHS.twitter },
];
