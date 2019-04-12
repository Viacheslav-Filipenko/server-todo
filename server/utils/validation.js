const validator = require("validator");

module.exports = function validateInput(input) {

    input = input.trim();

    if (input) {
        return validator.escape(input);
    }
    return false;
}