export type ThreeStyleCase = {
    id: number,
    firstElement: Element,
    secondElement: Element,
    thirdElement: Element,
    personId: number,
    caseType: ElementType,
    isActive: boolean,
    letterMark: LetterMark,
    letterPairs: Array<LetterPair>
}
export type LetterMark = {
    id: number,
    mark: String,
    caseId: number,
    personId: number
}
export type LetterPair = {
    image: String
}
export type Element = {
    id: number,
    name: string,
    type: ElementType,
    position: number,
    orientation: number,
    letterMarks: Array<LetterMark>
}
export enum ElementType {
    corner = 1,
    edge = 2
}
