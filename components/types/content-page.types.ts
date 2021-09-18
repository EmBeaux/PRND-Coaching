export type ActiveModal = 'consult' | '360' | 'seminar' | '';

export interface GridItem {
    _id: string,
    icon?: string,
    title: string,
    description: string,
    name?: string,
    buttonText?: string,
    modalType?: string,
    image?: string,
    imageId?: string
}

export interface PageText {
    _id: string,
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

interface PhotoPartial {
    _id: string
    mimetype: string
    buffer: {
        type: string,
        data: Buffer
    }
}
export type Photo = Blob & PhotoPartial