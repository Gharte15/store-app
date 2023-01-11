import { join } from "path";

export const databaseConfig = {
  type: 'postgres' as 'postgres',
  host: process.env.PG_HOST, // Adres IP kontenera
  port: 5432, // Port bazy danych
  username: 'admin',
  password: 'admin',
  database: 'store_app_db',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
};