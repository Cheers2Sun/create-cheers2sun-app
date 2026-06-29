import { FlightService } from "../services/FlightService";
import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";

/**
 * Handles incoming HTTP requests.
 *
 * Controllers perform validation
 * and delegate work to services.
 */
export class FlightSearchController {

    constructor(
        private readonly service: FlightService
    ) {
    }

    /**
     * Search flights.
     */
    public async search(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse> {

        return await this.service.searchFlights(
            request
        );

    }

}
