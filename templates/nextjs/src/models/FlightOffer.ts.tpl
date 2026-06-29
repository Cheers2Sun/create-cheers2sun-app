import { FlightSegment } from "./FlightSegment";

export interface FlightOffer {

    id: string;

    price: number;

    currency: string;

    segments: FlightSegment[];

}
