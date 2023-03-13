import * as fs from "fs"

export class Logger {

    private static instance : Logger;
    private SNL;
    
    static getInstance () : Logger {
        if (!Logger.instance){
            Logger.instance = new Logger ();
        }
        return Logger.instance;
    }

    private constructor () {
        const logdir = "log";
        if (!fs.existsSync(logdir))
        {
            fs.mkdirSync (logdir);
        }

        const _mod = require ("simple-node-logger");
        const opts = {
            logDirectory : logdir,
            fileNamePattern : "daily-<DATE>.log",
            dateFormat : "YYYY-MM-DD",
            timestampFormat : "YYYY-MM-DD HH:mm:ss.SSS"
        }

        this.SNL = _mod.createRollingFileLogger (opts);
        this.SNL.setLevel ('info');
    }

    static Log (msg: string, verbose: boolean = true) {
        Logger.getInstance()._log(msg, verbose);
    }
    protected _log (msg: string, verbose: boolean) {
        const str : string = `[LOG] ${msg}`; 
        this.SNL.log (str);
        if (verbose)
            console.log (str);
    }

    static Info (msg: string, verbose : boolean = true) {
        Logger.getInstance()._info(msg, verbose);
    }
    protected _info (msg: string, verbose : boolean) {
        const str : string = `[INFO] ${msg}`; 
        this.SNL.info (str);
        if (verbose)
            console.log (str);
    }

    static InfoObj (msg: string, obj : any, verbose : boolean = true) {
        Logger.getInstance()._InfoObj(msg, obj, verbose);
    }
    protected _InfoObj (msg: string, obj : any, verbose : boolean) {
        const str : string = `[INFO] ${msg}`; 
        this.SNL.info (str);
        this.SNL.info (obj);
        if (verbose)
            console.log (str);
            console.log (obj);
    }

    static Warn (message : string, verbose : boolean = true) {
        Logger.getInstance()._warn(message, verbose);
    }
    protected _warn (message : string, verbose : boolean = false, type : string = "WARN") {

        const str : string = `[WARN] ${message}`; 
        this.SNL.warn (str);
        if (verbose)
            console.log (str);
    }

    static Error (message : string, verbose : boolean = true) {
        Logger.getInstance()._error(message, verbose);
    }
    public _error (message : string, verbose : boolean = false, type : string = "ERROR") {
        const str : string = `[ERROR] ${message}`; 
        this.SNL.error (str);
        if (verbose)
            console.log (str);
    }
}