function sortBy(objs, property, asc) {
  /**
   * Sort array of objects by property
   */
  asc = asc ? true : false;
  return objs.sort((a, b) => {
    if (a[property] > b[property]) { return asc ? 1 : -1 }
    else if (a[property] < b[property]) { return asc ? -1 : 1 }
    else { return 0 }
  });
}


function remove(objs, detector) {
  if (!objs.length) return;
  var t = objs.find(detector);
  if (!t) return;
  var index = objs.indexOf(t);
  if (index > -1) {
    return objs.splice(index, 1)
  }
}

module.exports = {
  sortBy: sortBy,
  remove: remove
};
