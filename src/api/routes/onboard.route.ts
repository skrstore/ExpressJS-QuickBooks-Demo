import { Request, Response, Router } from "express";

import { OnboardService } from "../services/onboard.service";

const onboardService = new OnboardService();

class OnboardRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.mountRoutes();
    }

    async onboardBusiness(req: Request, res: Response) {
        try {
            const business = req.query.business;
            const result = await onboardService.onboardBusiness(business);

            if (result) {
                return res.send({
                    status: true,
                    message: `Data Onboarding Completed of Business <${business}>`,
                });
            }

            throw Error();
        } catch (error) {
            return res.send({
                status: false,
                error: "Error Occurred in Onboarding the Data",
            });
        }
    }

    private mountRoutes() {
        this.router.get("/onboard", this.onboardBusiness);
    }
}

export = new OnboardRoutes().router;
