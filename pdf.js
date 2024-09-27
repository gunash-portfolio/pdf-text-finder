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
const fs_1 = __importDefault(require("fs"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
// Function to read a PDF and search for occurrences of "281"
const readPdfAndFindText = (filePath, searchText) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBuffer = fs_1.default.readFileSync(filePath);
    try {
        const data = yield (0, pdf_parse_1.default)(dataBuffer);
        const text = data.text;
        // Find occurrences of "281"
        const matches = text.match(new RegExp(searchText, "g")) || [];
        console.log(`Found ${matches.length} occurrences of "${searchText}"`);
        return matches.length;
    }
    catch (err) {
        console.error("Error reading PDF:", err);
        return 0;
    }
});
// Use the function to read the PDF
const pdfPath = "./filename.pdf"; // Replace with your PDF file path
const searchText = "searching_text";
readPdfAndFindText(pdfPath, searchText).then((count) => {
    console.log(`Total occurrences of "${searchText}": ${count}`);
});
