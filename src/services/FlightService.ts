import { FlightProvider } from "../providers/FlightProvider";
import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";

/**
 * Business service responsible for
 * flight search operations.
 *
 * This layer contains application
 * business logic and is independent
 * of any flight provider.
 */
export class FlightService {

    constructor(
        private readonly provider: FlightProvider
    ) {
    }

    /**
     * Searches for available flights.
     */
    public async searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse> {

        return await this.provider.searchFlights(
            request
        );

    }

}
