const fs = require("fs");
const data = fs.readFileSync("lun.json").toString();
console.log(data);
let users = JSON.parse(data);
function createUser(user_id, user_name, user_address) {
  users[user_id] = {
    user_name,
    user_address,
  };
  console.log(users);
}
createUser(444, "laa", "israel");
createUser(22, "louie", "italy");

// Delete user
function deleteUser(user_id) {
  delete users[user_id];
}

deleteUser(22);
function DropDB() {
  delete users;
}
function PrintDB() {
  console.log(users);
}

function readUser(id) {
  let val = users[id];
  if (val) {
    return val;
  } else {
    console.log("user not found");
    return {};
  }
}

function updateUser(id, newAttributes) {
  let oldAttributes = readUser(id);
  users[id] = {
    ...oldAttributes,
    ...newAttributes,
  };
}

createUser(33, "loay", "haifa");
createUser(82, "dany", "spain");
createUser(63, "haya", "nazareth");
updateUser(11, "lana", "los angelos");
deleteUser(82);
deleteUser(100);
fs.writeFileSync("lun.json", JSON.stringify(users));
