const os = require("os");

module.exports = {
    php:
        os.platform() === "win32"
            ? "C:\\xampp\\php\\php.exe"
            : "/opt/lampp/bin/php"
};