export default () => ({
    port: Number(process.env.SERVER_PORT) || 3000,
    latestDetectionTime: 60,
    adminUsername: process.env.ADMIN_USER,
    adminPassword: process.env.ADMIN_PASSWORD,
    database: {
        client: 'mysql',
        useNullAsDefault: false,
        connection: {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
        }
    }
});
