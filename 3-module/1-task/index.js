function namify(users) {
  let names = [];

for (const item of users){
names.push(`${item.name}`)
}
return names
}
