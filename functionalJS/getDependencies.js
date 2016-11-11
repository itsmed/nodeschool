function getDependencies(tree, deps = []) {
  let mod = tree && tree.dependencies || [];
  Object.keys(mod).forEach((dep) => {
    let d = dep.concat('@', mod[dep].version);
    if (deps.indexOf(d) === -1) {
      deps.push(d);
    }
    getDependencies(mod[dep], deps);
  });
  return deps.sort();
}

module.exports = getDependencies