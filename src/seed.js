export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'y1YyphwEWDOdiqcIFa9kxPHwPu02',
            username: 'john_doe',
            fullName: 'John Doe',
            emailAddress: 'johndoe@gmail.com',
            balance: '0.0',
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'mary_jane',
            fullName: 'Mary Jane',
            emailAddress: 'maryjane@gmail.com',
            balance: '0.0',
            dateCreated: Date.now()
          },
    ];

    for (let i = 0; i < users.length; i++) {
        firebase.firestore().collection('users').add(users[i]);
    }
}