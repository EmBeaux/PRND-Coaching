export type ActiveModal = 'consult' | '360' | 'seminar' | '';

export interface GridItem {
    _id: string,
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
export interface GenericObject {
    [key: string]: any
}