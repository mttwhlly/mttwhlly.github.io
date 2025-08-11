import React from 'react';
import {
  Code,
  PaintBrush,
  Eye,
  Wrench,
  TestTube,
  Database,
  Users,
  CheckCircle,
  Brain,
  Cpu,
  Robot,
} from '@phosphor-icons/react';

interface Skill {
  name: string;
  description?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  highlight?: boolean;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    // 1) Applied AI Engineering
    {
      id: 'ai-engineering',
      title: 'Applied AI Engineering',
      description:
        'Shipping production AI features: retrieval, orchestration, evals, and on-device/edge.',
      icon: Brain,
      highlight: true,
      skills: [
        { name: 'LLM Orchestration', description: 'Tools, function calling, tool-use flows' },
        { name: 'RAG & Embeddings', description: 'Chunking, indexing, reranking, caching' },
        { name: 'Vector Search', description: 'pgvector, Pinecone, Weaviate' },
        { name: 'Model Evals & QA', description: 'Quality, latency, safety, regression checks' },
        { name: 'On‑device/Edge', description: 'WebGPU, ONNX Runtime Web, TF.js' },
        { name: 'Fine‑tuning/LoRA', description: 'Targeted adaptation for domain tasks' },
        { name: 'Agents (pragmatic)', description: 'Task routing, queues, retry/rollback' },
        { name: 'Privacy & Security', description: 'PII redaction, prompt injection defenses' },
      ],
    },

    // 2) AI UX & Design Systems
    {
      id: 'ai-ux',
      title: 'AI UX & Design Systems',
      description:
        'Pattern‑driven AI interfaces: clarity, explainability, feedback loops, and accessibility.',
      icon: PaintBrush,
      highlight: true,
      skills: [
        { name: 'Beyond Chat UIs', description: 'Inline assist, suggesters, adaptive toolbars' },
        { name: 'Explainability', description: 'Citations, confidence, reveal‑on‑demand detail' },
        { name: 'Feedback Loops', description: 'Ratings, edits-as-labels, preferences' },
        { name: 'Accessibility for AI', description: 'SR semantics for dynamic content' },
        { name: 'Design Systems', description: 'Tokens, docs, usage guidance for AI affordances' },
      ],
    },

    // 3) Next‑Gen Frontend Architecture
    {
      id: 'nextgen-frontend',
      title: 'Next‑Gen Frontend Architecture',
      description:
        'Streaming, realtime collaboration, local‑first sync, and high‑performance visualization.',
      icon: Cpu,
      highlight: true,
      skills: [
        { name: 'Streaming UI', description: 'ReadableStream, Suspense, perceived performance' },
        { name: 'Realtime & CRDTs', description: 'Yjs, presence, conflict‑free editing' },
        { name: 'Local‑first', description: 'Sync, offline, merge strategies' },
        { name: 'WebAssembly/WebGPU', description: 'Client‑side compute & render' },
        { name: 'Data Viz', description: 'Canvas/WebGL/D3 for model outputs' },
      ],
    },

    // Core Frontend (condensed, still visible)
    {
      id: 'frontend',
      title: 'Core Frontend',
      description: 'Solid fundamentals for reliable, scalable interfaces.',
      icon: Code,
      skills: [
        { name: 'HTML5 & CSS3', description: 'Semantic structure, modern layout' },
        { name: 'TypeScript', description: 'Types for durability and refactor safety' },
        { name: 'React & Ecosystem', description: 'Hooks, context, performance' },
        { name: 'Web Components', description: 'Custom elements, shadow DOM' },
        { name: 'PWAs', description: 'Service workers, offline strategies' },
      ],
    },

    // Tooling & Ops (AI-aware)
    {
      id: 'tooling',
      title: 'Tooling & Ops',
      description: 'Devex, observability, and delivery tuned for AI features and fast iteration.',
      icon: Wrench,
      skills: [
        { name: 'Git & Branching', description: 'Reviews, trunk/PR hygiene' },
        { name: 'Build Tooling', description: 'Vite/Webpack/Rollup optimization' },
        { name: 'CI/CD + Evals', description: 'Model eval gates, preview deploys' },
        { name: 'Observability', description: 'Tracing, logging, cost/latency budgets' },
        { name: 'Queues/Workers', description: 'Retry, idempotency, backoff' },
      ],
    },

    // Testing & Quality (expanded for AI)
    {
      id: 'testing',
      title: 'Testing & Quality',
      description: 'From unit and E2E to model evals, red‑teaming, and regression protection.',
      icon: TestTube,
      skills: [
        { name: 'Unit & Component', description: 'Jest + React Testing Library' },
        { name: 'E2E', description: 'Playwright automation and fixtures' },
        { name: 'Accessibility Testing', description: 'axe + manual SR workflows' },
        { name: 'Performance Testing', description: 'Lighthouse, CWV budgets' },
        { name: 'Model Evals', description: 'Safety, accuracy, drift monitoring' },
      ],
    },

    // APIs, Data & Platforms (AI-ready)
    {
      id: 'apis',
      title: 'APIs, Data & Platforms',
      description: 'APIs and data plumbing that power retrieval, streaming, and realtime UX.',
      icon: Database,
      skills: [
        { name: 'Node.js/Express', description: 'Light services and gateways' },
        { name: 'REST & GraphQL', description: 'Contracts, pagination, auth' },
        { name: 'Vector DBs', description: 'pgvector, Pinecone, Weaviate' },
        { name: 'WebSockets/Server‑sent', description: 'Live updates and streams' },
        { name: 'Legacy Integration', description: '.NET interop and migrations' },
      ],
    },

    // Process & Collaboration (product-minded)
    {
      id: 'process',
      title: 'Process & Collaboration',
      description:
        'Product-minded delivery: discovery, ethics reviews, and crisp cross‑functional comms.',
      icon: Users,
      skills: [
        { name: 'Product Discovery', description: 'Problem framing, rapid protos' },
        { name: 'Cross‑functional Flow', description: 'Design–dev handshake, docs' },
        { name: 'Ethics & Safety Reviews', description: 'Risk surfacing, mitigations' },
        { name: 'Mentorship', description: 'Reviews, pairing, growth plans' },
        { name: 'Roadmapping', description: 'Objectives, scope, stakeholder updates' },
      ],
    },
  ];

  return (
    <section className="container px-4 py-16 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500 mb-4">
          Skills
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`p-2 lg:p-4 border rounded-2xl transition-all duration-300 hover:border-gray-300 hover:shadow-sm ${
              category.highlight ? 'border-gray-300 bg-gray-50/50' : 'border-gray-200 bg-white'
            }`}
          >
            {/* Category Header */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl bg-white border border-gray-200">
                <category.icon size={24} className="text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-md text-gray-600 leading-relaxed">{category.description}</p>
              </div>
            </div>

            {/* Skills List (toggle on if you want details visible) */}
            {/*
            <div className="mt-4 space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#D4FC52] flex-shrink-0 mt-0.5"
                    weight="fill"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    {skill.description && (
                      <span className="text-gray-600 ml-2">— {skill.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
