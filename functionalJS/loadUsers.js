function loadUsers(userIds, load, done) {
  var users = [];

  userIds.forEach((user, i) => {
    users[i] = load(user);
  });

  return done(users);
}

module.exports = loadUsers