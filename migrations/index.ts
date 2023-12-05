import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Customer1701267400879 } from './1701267400879-customer';
import { UpdatePrimaryKey1701789793124 } from './1701789793124-update-primary-key';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: +process.env.PG_PORT,
  entities: [],
  migrations: [Customer1701267400879, UpdatePrimaryKey1701789793124],
});
