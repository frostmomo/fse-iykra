class responseModel {
    constructor(message, data, success) {
        this.message = message;
        this.data = data;
        success == null ? this.success = true : this.success = false;
    }
}

module.exports = responseModel;