export class DuffelError extends Error {

    constructor(message: string) {

        super(message);

        this.name = "DuffelError";

    }

}
