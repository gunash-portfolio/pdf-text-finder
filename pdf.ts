import fs from "fs";
import pdf from "pdf-parse";

// Function to read a PDF and search for occurrences of "281"
const readPdfAndFindText = async (
  filePath: string,
  searchText: string,
): Promise<number> => {
  const dataBuffer = fs.readFileSync(filePath);

  try {
    const data = await pdf(dataBuffer);
    const text = data.text;

    // Find occurrences of "281"
    const matches = text.match(new RegExp(searchText, "g")) || [];

    console.log(`Found ${matches.length} occurrences of "${searchText}"`);
    return matches.length;
  } catch (err) {
    console.error("Error reading PDF:", err);
    return 0;
  }
};

// Use the function to read the PDF
const pdfPath = "./filename.pdf"; // Replace with your PDF file path
const searchText = "searching_text";

readPdfAndFindText(pdfPath, searchText).then((count) => {
  console.log(`Total occurrences of "${searchText}": ${count}`);
});
