import { PrismaClient } from "../src/generated/prisma/client.js";
const prisma = new PrismaClient();
async function insertUser(username, email, password, firstName, lastName) {
    try {
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password,
                firstName,
                lastName,
            },
        });
        console.log("Inserted User:", user);
    }
    catch (error) {
        if (error.code === "P2002") {
            console.error(`User with username "${username}" already exists.`);
        }
        else {
            console.error(error);
        }
    }
}
async function updateUsers(username, { firstName, lastName, email, password }) {
    const updatedUser = await prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName,
            email,
            password
        },
    });
    console.log("Updated User:", updatedUser);
}
async function getUsers(username) {
    const getUser = await prisma.user.findFirst({
        where: { username: username }
    });
    console.log(getUser);
}
// insertUser("akhildhsdfsdfsdfimxsdsdfsdfsdffdsfn", "akhildhimsdfan@gmail.com", "akhilsdf@1897", "Akhsdfil", "Kumsdfar")
//     .catch((e) => console.error(e))
//     .finally(async () => await prisma.$disconnect());
// updateUsers("akhildhsdfsdfsdfimxsdsdfsdfsdffdsfn", { firstName: "Gujsdfsdfju", lastName: "Dhisdfsdfman",email:"aksdfsdfhil@gmail.com",password:"Assdfsdfdfsdfs" })
//     .catch((e) => console.error(e))
//     .finally(async () => await prisma.$disconnect());
getUsers("akhildhsdfsdfsdfimxsdsdfsdfsdffdsfn");
//# sourceMappingURL=index.js.map