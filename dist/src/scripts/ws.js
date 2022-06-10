"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = __importDefault(require("playwright"));
const vgmUrl = "https://pluto.tv/es/on-demand/series/kochikame/season/1/episode/ryotsu-seras-ceporro-1995-1-1?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735&referrer=copy-link";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield playwright_1.default.firefox.launch({
        headless: false,
    });
    const page = yield browser.newPage();
    yield page.goto(vgmUrl);
    yield page.$$("video");
    const element = yield page.waitForSelector("video");
    console.log("Loaded image: " + (yield element.getAttribute("src")));
    yield page.close();
    yield browser.close();
}))();
