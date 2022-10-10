export default interface TodoInterface {
    id: string;
    text: string;
    isDone: boolean;
    addedAt: Date;
    doneAt: Date | null;
    markAsDone(): void;
}