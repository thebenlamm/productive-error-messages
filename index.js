module.exports = (cb) => {
  try {
    cb();
  } catch (err) {
    window.open(`https://stackoverflow.com/search?q=[js]+${err.message}`, '_blank');
    throw err;
  }
}