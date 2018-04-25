//https://github.com/Microsoft/TypeScript/issues/5995
// I guess the issue is that there are multiple tsc.exe on the path and the first one is the old one (in my case 1.0.3):

// PS C:\Users\moozz_000> where.exe tsc
// C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0\tsc.exe
// C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0\tsc.js
// C:\Users\moozz_000\AppData\Roaming\npm\tsc
// C:\Users\moozz_000\AppData\Roaming\npm\tsc.cmd
//use tsc.cmd greeter.ts
function greeter(person)
{
    return "Hello, " +  person;
}

let userName = "John";

document.body.innerHTML = greeter(userName);