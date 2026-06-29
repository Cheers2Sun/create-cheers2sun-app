const DUFFEL_BASE_URL = "https://api.duffel.com";

export class DuffelClient {

    constructor(

        private readonly token: string

    ) {
    }

    public async post(

        endpoint: string,

        body: unknown

    ): Promise<any> {

        const response = await fetch(

            `${DUFFEL_BASE_URL}${endpoint}`,

            {

                method: "POST",

                headers: {

                    Authorization: `Bearer ${this.token}`,

                    "Content-Type": "application/json",

                    "Duffel-Version": "v2"

                },

                body: JSON.stringify(body)

            }

        );

        if (!response.ok) {

            throw new Error(

                `Duffel request failed (${response.status})`

            );

        }

        return await response.json();

    }

}
