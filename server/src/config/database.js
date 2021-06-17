module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
    },
    host: 'ec2-3-233-7-12.compute-1.amazonaws.com',
    port: 5432,
    username: 'eosvnijsfzjmqn',
    password: '2fdbb70bdb15ce08a205298fce5b3cc514ce259366823488003042d0320338be',
    database: 'd3aokrb06336el',
    define: {
        timestamps: true,
        underscored: true,
    },
}