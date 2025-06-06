function stringChop(str, size) {
    if (!str || size <= 0) return []; // Handle null, undefined, or invalid size
    const chunks = [];

    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

    

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
