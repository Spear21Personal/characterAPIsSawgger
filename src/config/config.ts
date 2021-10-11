import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.RDS_DB_HOST;
const MYSQL_DATABASE = process.env.RDS_DB_DATABASE;
const MYSQL_USER = process.env.RDS_DB_USER;
const MYSQL_PASSWORD = process.env.RDS_BD_PASSWSORD;

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4001;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    mysql: MYSQL

};

export default config;
