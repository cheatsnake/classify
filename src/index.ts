import "dotenv/config";
import createServer from "./server";

const startServer = () => {
    const app = createServer();
    const PORT: number = parseInt(<string>process.env.PORT, 10) || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
