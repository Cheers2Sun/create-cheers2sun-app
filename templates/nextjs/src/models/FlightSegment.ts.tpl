import { Airport } from "./Airport";

export interface FlightSegment {

    carrier: string;

    flightNumber: string;

    departureAirport: Airport;

    arrivalAirport: Airport;

    departureTime: string;

    arrivalTime: string;

}
