import express, { Application } from "express";

import OnboardRoutes from "./api/routes/onboard.route";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.setUpConfiguration();
    }

    private setUpConfiguration() {
        this.app.use("/api", OnboardRoutes);
    }
}

export default new App().app;

