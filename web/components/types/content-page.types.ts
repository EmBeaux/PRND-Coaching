export type ActiveModal = 'consult' | '360' | 'seminar' | '';

export interface GridItem {
    icon?: string,
    title: string,
    description: string,
    buttonText?: string,
    modalType?: string,
    image?: string
}

export interface PageText {
    page: string,
    content: {
        main: string,
        grid: GridItem[]
    },
    editableElements: string[]
}