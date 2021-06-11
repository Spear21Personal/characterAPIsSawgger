import { connection } from 'mongoose';
import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user || "admin",
    password: config.mysql.password || 'RM5407ljs',
    host: config.mysql.host || "localhost",
    database: config.mysql.database || 'character'
}

const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(connection);
    })
})

const Query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(result);
    });
});
;
export { Connect, Query}