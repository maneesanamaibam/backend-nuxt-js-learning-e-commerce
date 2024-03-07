import { Client } from 'pg';

class PostgresDBService {
	private client: Client;
	init(): void {
		this.client = new Client({
			user: process.env.POSTGRES_SERVER_USER_NAME,
			host: process.env.POSTGRES_SERVER_HOST_NAME,
			database: process.env.POSTGRES_DATABASE,
			password: process.env.POSTGRES_SERVER_PASSWORD,
			port: Number(process.env.POSTGRES_SERVER_PORT), // Default PostgreSQL port
		});
	}
}

export default PostgresDBService;
