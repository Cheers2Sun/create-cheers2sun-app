import { FlightOffer } from "./FlightOffer";

/**
 * Flight search response returned by the application.
 *
 * This model is provider-independent.
 */
export interface FlightSearchResponse {

    offers: FlightOffer[];

}
