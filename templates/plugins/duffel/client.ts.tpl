export class DuffelClient {

    constructor(
        private readonly apiToken: string
    ) {}

    public token(): string {

        return this.apiToken;

    }

}
