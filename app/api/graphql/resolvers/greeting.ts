export const greeting = {
    Query: {
        greeting: async (_: any, { id }: { id: string }) => {
            return [
                { message: `Hello, your ID is 101` },
                { message: `Welcome, user with ID 2` },
                { message: `Greetings, ID 3 detected` },
            ];
        },
    },
};
