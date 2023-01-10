import express from "express";
import * as driverServices from "../services/driverService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(driverServices.getDrivers());
});
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id) || req.params.id;
  res.send(driverServices.getDriver(id));
});
router.get("/find/:name", (req, res) => {
  const name = req.params.name;
  res.send(driverServices.findDriver(name));
});

export default router;
