import { isAuthenticated } from "./middleware/auth.middleware.js";

app.get("/profile", isAuthenticated, (req, res) => {
  res.json({ message: "Profile data" });
});
