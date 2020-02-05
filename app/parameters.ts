export var values = {
    NODE_HOST : (process.env.NODE_ENV === 'production') ? 'localhost' : 'localhost',
    NODE_PORT : (process.env.NODE_ENV === 'production') ? '3000' : '3000',

    DB_HOST : (process.env.NODE_ENV === 'production') ? '10.242.30.39' : '10.242.30.39',
    DB_PORT : (process.env.NODE_ENV === 'production') ? '3306' : '3306',

    DB_USERNAME : (process.env.NODE_ENV === 'production') ? 'scribeapp' : 'scribeapp',
    DB_PASSWORD : (process.env.NODE_ENV === 'production') ? 'scribe@PP' : 'scribe@PP',
    DB_DATABASE : (process.env.NODE_ENV === 'production') ? 'scribeaic' : 'scribeaic'
};