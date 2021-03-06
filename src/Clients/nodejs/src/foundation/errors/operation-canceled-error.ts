/* istanbul ignore file */

export class OperationCanceledError extends Error {
    public static readonly defaultMessage = 'An operation was canceled.';
    constructor(message?: string) {
        super(message || OperationCanceledError.defaultMessage);
        this.name = 'OperationCanceledError';
    }
}
