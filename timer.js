const args = process.argv.slice(2);

if (Array.isArray(args)) {
  for (let x = 0; x < args.length; x++) {

    let val = parseInt(args[x]);

    if (Number.isInteger(val) && val > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log('beep');
      },(val * 1000));
    }
  }
}