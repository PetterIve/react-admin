
const getUsers = () => {
    let mockUsers = [];
    for (let i = 0; i < 10; i++) {
        const user = {
            id: i.toString(),
            email: `testemail${i}@gmail.com`,
            name: `Test User${i}`
        };
        mockUsers.push(user);
    }
    return mockUsers;
};

const getCourses = () => {
    let mockUsers = [];
    for (let i = 0; i < 40; i++) {
        const user = {
            id: i.toString(),
            name: `Testcourse ${i}`
        };
        mockUsers.push(user);
    }
    return mockUsers;
};

export const get = (relativePath: string): any => {
    switch (relativePath) {
        case '/users': return getUsers();
        case '/courses': return getCourses();
        default: return [];
    }
};