import { FlightService } from "../services/FlightService";
import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";

/**
 * Handles HTTP requests.
 *
 * Controllers should never communicate directly
 * with external APIs.
 */
export class FlightSearchController {

    constructor(
        private readonly service: FlightService
    ) {
    }

    public async search(

        request: FlightSearchRequest

    ): Promise<FlightSearchResponse> {

        return this.service.searchFlights(
            request
        );

    }

}
