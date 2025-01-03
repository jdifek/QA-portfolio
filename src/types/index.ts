import { LucideIcon } from 'lucide-react'

export interface INavigationProps {
	activeSection: string
	setActiveSection: (section: string) => void
}

export interface ISkillCardProps {
	icon: LucideIcon
	title: string
	description: string
	index: number
}
