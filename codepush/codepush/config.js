var config = {};
config.development = {
  db: {
    username: 'HgsCodePush',
    password: 'hg_ch_jb,xm.@=//46',
    database: 'codepush',
    host: '192.168.1.4',
    port: 31306,
    dialect: "mysql",
    logging: false,
    operatorsAliases: false,
  },
  local: {
    storageDir: '/data',
    downloadUrl: 'http://192.168.1.4:3002/download',
    public: '/download'
  },
  jwt: {
    tokenSecret: '74JPXVcANKBANmZPG0oCrBKClgxchfZqwOhZ4H9bDDROWUs7Gb5BQJMTRekcHra'
  },
  common: {
    tryLoginTimes: 4,
    diffNums: 3,
    dataDir: "/data",
    storageType: "local",
    updateCheckCache: true,
    rolloutClientUniqueIdCache: true,
    codePushWebUrl:"http://192.168.1.4:3001"
  },
  smtpConfig:{
    host: "smtp.aliyun.com",
    port: 465,
    secure: true,
    auth: {
      user: "",
      pass: ""
    }
  },
  redis: {
    default: {
      host: '192.168.1.4',
      port: 7801,
      password:'2i0PISY4Rq7uiYlQ3Akizw998ih309ldnUBz7npS0yhc6A5acw3Tjj4yjaIrHcj',
      retry_strategy: function (options) {
        if (options.error.code === 'ECONNREFUSED') {
          return new Error('The server refused the connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            return new Error('Retry time exhausted');
        }
        if (options.times_connected > 10) {
            return undefined;
        }
        return Math.max(options.attempt * 100, 3000);
      }
    }
  }
}

config.development.log4js = {
  appenders: {console: { type: 'console'}},
  categories : {
    "default": { appenders: ['console'], level:'error'},
    "startup": { appenders: ['console'], level:'info'},
    "http": { appenders: ['console'], level:'info'}
  }
}

config.production = Object.assign({}, config.development);
module.exports = config;
