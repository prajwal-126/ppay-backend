import app from "./app.js";
import "./events/registerListeners.js";

const PORT = process.env.PORT || "8000";

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, error: err.message });
});
