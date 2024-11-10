"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabase_url = `${process.env.SUPABASE_URL}`;
const supabase_key = `${process.env.SUPABASE_API_KEY}`;
const supabase = (0, supabase_js_1.createClient)(supabase_url, supabase_key);
try {
    if (supabase) {
        console.log("Connected to supabase");
    }
    else {
        console.log("Error occurred");
    }
}
catch (e) {
    console.log("Error occurred");
}
exports.default = supabase;
