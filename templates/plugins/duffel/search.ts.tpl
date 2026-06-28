import { DuffelClient } from "./client";

export interface FlightSearchRequest {

    origin: string;

    destination: string;

}

export class FlightSearch {

    constructor(
        private readonly client: DuffelClient
    ) {}

    public async search(
        request: FlightSearchRequest
    ): Promise<void> {

        console.log(
            "Searching flights",
            request
        );

    }

}
