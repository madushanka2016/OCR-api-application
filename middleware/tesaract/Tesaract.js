const tesseract = require("tesseract.js");
class Tesaract {
    async read(file){
        const result = await tesseract.recognize(
            file,
            'eng',
        );
        return result.data.text;
    }
}
module.exports = Tesaract;