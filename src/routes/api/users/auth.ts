import express, {Application, Router} from "express";
const router: Router = express.Router();

//  @route  GET api/users/auth/public
//  @decs   get public authentication
//  @access Public
router.get("/public", ((req, res) => res.send("Public authentication")));

export default router;