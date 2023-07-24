print("Iniciando script init.js");

db = db.getSiblingDB('myRestaurantDB');

db.createUser(
    {
        user: "usuario",
        pwd: "tumamaenbicicleta",
        roles: [
            {
                role: "readWrite",
                db: "myRestaurantDB"
            }
        ]
    }
);

print("Usuario creado correctamente");
