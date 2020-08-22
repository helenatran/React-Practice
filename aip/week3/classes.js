// API for an online text-file editor

class Account {

    // Create a new document in the account
    addDocument(title) { };

    // Find all self-created documents matching the query
    findDocuments(query, callback) { };

    // Change the username
    setUsername(username) { };

    // Change the password
    setPassword(password) { };

    // Save changes to the account
    save(callback) { };
}

// An individual document
// A document is owned by one account
// but can be shared with any number of accounts 
class Document {

    // Insert a line in the document
    insertLine(lineNumber, text, callback) { };

    // Set the title of the document
    setTitle(title) { };

    // Change the text in a line of the document
    changeLine(lineNumber, text, callback) { };

    // Share the supplied document with another account
    shareWith(account, isReadOnly) { };

    // Save all changed lines to the database
    save(callback) { };

    // Delete a line of the document
    deleteLine(lineNumber) { };
}
