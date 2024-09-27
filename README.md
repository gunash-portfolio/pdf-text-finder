# PDF Text Finder

**PDF Text Finder** is a TypeScript-based tool that reads a PDF document and searches for a specific string (e.g., "281"). The script uses the `pdf-parse` library to extract text from PDF files and then performs a search for the specified text.

## Features

- Extracts text from PDF files.
- Searches for occurrences of a specified string (e.g., "281") in the document.
- Outputs the number of matches found.

## Technologies Used

- **TypeScript**
- **Node.js**
- **pdf-parse** (for extracting text from PDF files)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:

    ```bash
    git clone git@github.com:gunash-portfolio/pdf-text-finder.git
    cd pdf-text-finder
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. Place the PDF file you want to scan in the project directory.

2. Update the file path in `pdf.ts` with the path to your PDF file.

    ```typescript
    const pdfPath = './path-to-your-file.pdf'; // Replace with your PDF file path
    const searchText = '281'; // You can change this to search for any text
    ```

3. Run the script:

    ```bash
    npx ts-node pdf.ts
    ```

4. The script will output the number of times the search string appears in the PDF.

### Example Output
```shell
Found 3 occurrences of "searchtext"
Total occurrences of "searchtext": `result of number you will get`
```


.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── pdf.js
├── pdf.ts
└── tsconfig.json
