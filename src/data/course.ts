import type { CourseLevel } from './courses';

export type LessonState = 'done' | 'active' | 'todo' | 'in-progress';

export interface Lesson {
	title: string;
	state: LessonState;
	href: string;
}

export interface Module {
	num: string;
	title: string;
	lessons: Lesson[];
}

interface CourseMeta {
	code: string;
	level: CourseLevel;
	title: string;
	progressText: string;
	progressPct: number;
}

const L = (title: string, state: LessonState): Lesson => ({
	title,
	state,
	href: '/lesson',
});

export const modules: Module[] = [
	{
		num: '01',
		title: 'Cluster Architecture',
		lessons: [
			L('Control plane anatomy', 'done'),
			L('Nodes, kubelet & CRI', 'done'),
			L('Cluster setup lab', 'done'),
		],
	},
	{
		num: '02',
		title: 'Workloads & Scheduling',
		lessons: [
			L('Pods & lifecycle', 'done'),
			L('Deployments & rollouts', 'done'),
			L('Scheduling & affinity', 'done'),
		],
	},
	{
		num: '03',
		title: 'Networking & Ingress',
		lessons: [
			L('Services & kube-proxy', 'done'),
			L('Ingress & the Gateway API', 'active'),
			L('Network policies', 'todo'),
		],
	},
	{
		num: '04',
		title: 'Storage',
		lessons: [L('Volumes & CSI', 'todo'), L('StatefulSets', 'todo')],
	},
	{
		num: '05',
		title: 'GitOps Delivery',
		lessons: [
			L('ArgoCD fundamentals', 'todo'),
			L('App-of-apps pattern', 'todo'),
			L('Progressive delivery', 'todo'),
		],
	},
	{
		num: '06',
		title: 'Production Hardening',
		lessons: [L('RBAC & policy', 'todo'), L('Upgrades & DR', 'todo')],
	},
];

const lessons = modules.flatMap((module) => module.lessons);
const completedLessons = lessons.filter((lesson) => lesson.state === 'done').length;

export const courseMeta = {
	code: 'FO-201',
	level: 'Intermediate',
	title: 'Kubernetes for Platform Engineers',
	progressText: `${completedLessons} / ${lessons.length}`,
	progressPct: Math.round((completedLessons / lessons.length) * 100),
} satisfies CourseMeta;
