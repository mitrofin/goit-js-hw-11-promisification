const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
         if(!allUsers) reject(Error(`Userlist is invalid`));
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
          resolve(updatedUsers);

    })
  /* const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  ); */

  
};

const logger = data => console.table(data);

/*
 * Сейчас работает так
 */
/* toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);
 */
/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);