const yargs = require('yargs')
const notes = require('./notes')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function() {
        console.log('Removing notes!')
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading notes!')
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing notes!')
    }
})

yargs.parse();