export type CourseLevel = 'Foundation' | 'Intermediate' | 'Advanced' | 'Expert' | 'Mastery';

export interface Course {
	track: string;
	code: string;
	title: string;
	desc: string;
	level: CourseLevel;
	duration: string;
	lessons: string;
}

export const courses = [
	{
		track: 'Foundations',
		code: 'FO-101',
		title: 'Linux & Shell for DevOps',
		desc: 'The operating system layer every infrastructure engineer must own: processes, filesystems, networking, systemd, and shell fluency.',
		level: 'Foundation',
		duration: '4 weeks',
		lessons: '24 lessons',
	},
	{
		track: 'Foundations',
		code: 'FO-102',
		title: 'Docker & Containerization',
		desc: 'Images, layers, registries, and runtime internals. Build small, secure containers and understand exactly what runs where.',
		level: 'Foundation',
		duration: '4 weeks',
		lessons: '22 lessons',
	},
	{
		track: 'Platform',
		code: 'FO-201',
		title: 'Kubernetes for Platform Engineers',
		desc: 'Cluster architecture, workloads, networking, storage, and GitOps delivery — taught on real multi-node clusters.',
		level: 'Intermediate',
		duration: '8 weeks',
		lessons: '42 lessons',
	},
	{
		track: 'Delivery',
		code: 'FO-202',
		title: 'CI/CD Engineering',
		desc: 'Pipelines as a product: GitHub Actions, ArgoCD, progressive delivery, artifact signing, and supply-chain security.',
		level: 'Intermediate',
		duration: '6 weeks',
		lessons: '30 lessons',
	},
	{
		track: 'Infrastructure',
		code: 'FO-203',
		title: 'Infrastructure as Code with Terraform',
		desc: 'Modules, state, workspaces, and policy as code. Design IaC that a team can actually maintain for years.',
		level: 'Intermediate',
		duration: '5 weeks',
		lessons: '26 lessons',
	},
	{
		track: 'Reliability',
		code: 'FO-301',
		title: 'Observability & SRE Practices',
		desc: 'SLOs, error budgets, incident response, and instrumenting systems with Prometheus, Grafana, and OpenTelemetry.',
		level: 'Advanced',
		duration: '6 weeks',
		lessons: '32 lessons',
	},
] satisfies Course[];
