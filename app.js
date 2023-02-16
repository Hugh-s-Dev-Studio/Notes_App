const command = process.argv[2]

if (command === 'add') {
    console.log('Add notes!')
} else if (command === 'remove') {
    console.log('Remove notes!')
} else if (command === 'read') {
    console.log('Read notes!')
} else if (command === 'list') {
    console.log('List notes!')
}
