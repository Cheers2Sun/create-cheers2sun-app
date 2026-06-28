export class DuffelClient {

    constructor(
        private readonly apiToken: string
    ) {}

    public token(): string {

        return this.apiToken;

    }

    public configured(): boolean {

        return this.apiToken.length > 0;

    }

}
