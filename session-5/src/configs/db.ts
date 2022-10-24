import { Pool, PoolConfig } from 'pg';

const poolConfig: PoolConfig =  {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT as any,
}
const db = new Pool(poolConfig);

export default db;