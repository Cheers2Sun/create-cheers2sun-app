import { FlightProvider } from "../providers/FlightProvider";
import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";

/**
 * Business layer for flight operations.
 *
 * Services communicate only with provider interfaces.
 */
export class FlightService {

    constructor(
        private readonly provider: FlightProvider
    ) {
    }

    public async searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse> {

        return this.provider.searchFlights(
            request
        );

    }

}
