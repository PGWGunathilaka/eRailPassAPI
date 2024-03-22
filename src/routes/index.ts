import { Router } from "express";
import { authRoutes } from "./auth";
import { pendingApprovalRoutes } from "./pending-approval";
import { stationRoutes } from "./station";
import { ticketCheckRoutes } from "./ticket-check";
import { ticketPricingRoutes } from "./ticket-pricing";
import { trainRoutes } from "./train";
import { userRoutes } from "./user";
import { ticketRoutes } from "./ticket";
import { paymentRoutes } from "./payment";

export const router = Router();

authRoutes(router)
pendingApprovalRoutes(router)
stationRoutes(router)
ticketRoutes(router)
ticketCheckRoutes(router)
ticketPricingRoutes(router)
trainRoutes(router)
userRoutes(router)
paymentRoutes(router)
