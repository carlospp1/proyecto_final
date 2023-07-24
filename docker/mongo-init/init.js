print("Iniciando script init.js");

db = db.getSiblingDB('myRestaurantDB');

db.createUser(
    {
        user: "usuario",
        pwd: "password123",
        roles: [
            {
                role: "readWrite",
                db: "myRestaurantDB"
            }
        ]
    }
);

print("Usuario creado correctamente");
