type UserEntity = {
    id: string;
    name: string;
    email: string;
    password: string;
    photo?: string;
    createdAt: Date;
    updatedAt: Date;
}

type CreateUser = {
    name: string;
    email: string;
    password: string;
    photo?: string;
}

type UpdateUser = {
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
}

class ManagerError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
    ) {
        super(message);
    }

    static badRequest(message: string) {
        return new ManagerError(400, message);
    }

    static notFound(message: string) {
        return new ManagerError(404, message);
    }
}


class UsersServices {

    users: UserEntity[] = [
        { id: "1", name: "oscar", email: "oscar@google.com", password: "123456", photo: "photo1.jpg", createdAt: new Date("2024-11-08"), updatedAt: new Date("2024-11-14") },
        { id: "2", name: "gregorio", email: "gregorio@google.com", password: "123456", photo: "photo2.jpg", createdAt: new Date("2024-11-10"), updatedAt: new Date("2024-11-14") },
        { id: "3", name: "samuel", email: "samuel@microsoft.com", password: "123456", photo: "photo3.jpg", createdAt: new Date("2024-11-12"), updatedAt: new Date("2024-11-14") },
        { id: "4", name: "marino", email: "marino@microsoft.com", password: "123456", photo: "photo4.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "5", name: "benny", email: "benny@google.com", password: "123456", photo: "photo5.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "6", name: "carlos", email: "carlos@microsoft.com", password: "123456", photo: "photo6.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "7", name: "luis", email: "luisR@microsoft.com", password: "123456", photo: "photo7.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "8", name: "ali", email: "ali@microsoft.com", password: "123456", photo: "photo8.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "9", name: "andres", email: "andres@microsoft.com", password: "123456", photo: "photo9.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "10", name: "misael", email: "misael@google.com", password: "123456", photo: "photo10.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "11", name: "robert", email: "robert@microsoft.com", password: "123456", photo: "photo11.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "12", name: "luis", email: "luisJ@google.com", password: "123456", photo: "photo12.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
        { id: "13", name: "luis", email: "PropiertisluisC@microsoft.com", password: "123456", photo: "photo13.jpg", createdAt: new Date("2024-11-11"), updatedAt: new Date("2024-11-14") },
    ];

    async create( user: CreateUser ): Promise<UserEntity> {
        try {
            const newUser: UserEntity = { ...user, id: Date.now().toString(), createdAt: new Date(), updatedAt: new Date() };

            if (!newUser.email.endsWith("@google.com") && !newUser.email.endsWith("@microsoft.com")) {
                throw ManagerError.badRequest("No eres cliente de microsoft o google")
            }

            if (!newUser.photo?.includes('.jpg')) {
                throw ManagerError.badRequest("Imagen not soportada");
            }

            this.users.push(newUser);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<{ total: number, data: UserEntity[] }> {
        try{
          return { total: this.users.length, data: this.users };
        }catch(error){
          throw error;
        }
    }

    async findOne(id: string): Promise<UserEntity> {
        try{
          const user = this.users.find((user) => user.id === id);
          if (!user) {
              throw ManagerError.notFound("User not found");
          }
          return user;
        }catch(error){
          throw error;
        }
    }

    async update(id: string, updateUser: UpdateUser): Promise<UserEntity> {
        try{
          const user = await this.findOne(id);
          const userIndex = this.users.findIndex((user)=>user.id===id);

          this.users[userIndex] = { ...user, ...updateUser, updatedAt: new Date() };

          return this.users[userIndex];
        }catch(error){
          throw error;
        }
    }

    async remove(id: string): Promise<UserEntity> {
        try{
          const userExist = await this.findOne(id);
          
          this.users = this.users.filter((user) => user.id !== id);
          return userExist;
        }catch(error){
          throw error;
        }
    }

    async findOneByEmail(email: string): Promise<UserEntity> {
        try{
          const correo = this.users.find((correo) => correo.email === email);
          if (!correo) {
              throw ManagerError.notFound("email not found");
          }
          return correo;
        }catch(error){
          throw error;
        }
    }

    async microsoftUsers(): Promise<UserEntity[]> {
        const microsof = this.users.filter((microsof) => microsof.email.includes('@microsof'));
        if (!microsof) {
            throw ManagerError.notFound("email de microsoft not found");
        }
        return microsof;
    }

    async googleUsers(): Promise<UserEntity[]> {
        try{
          const google = this.users.filter((google) => google.email.includes('@google'));
          if (google.length === 0) {
              throw ManagerError.notFound("email de googlet not found");
          }
          return google;
        }catch(error){
          throw error;
        }
    }

    async firstTenUsers(): Promise<UserEntity[]> {
        try{
          const firstTen = this.users.slice(0, 10);
          if (firstTen.length === 0) {
              throw ManagerError.notFound("No se encontraron registros");
          }
          return firstTen;
        }catch(error){
          throw error;
        }
    }
}

class UsersController {
    constructor(
        private readonly usersService: UsersServices = new UsersServices(),
    ) { }

    create = () => {
        const user: CreateUser = {
            name: "fermin",
            email: "fermin@google.com",
            password: "123456",
            photo: "photo1.jpg",
        }

        this.usersService.create( user )
            .then((user) => console.log(user))
            .catch((err) => console.log(err));
    }

    findAll = () => {
      this.usersService.findAll()
        .then((users)=>console.log(users))
        .catch((error)=>console.log(error))
    }

    findOne = () => {
      const idSearch = "2";

      this.usersService.findOne(idSearch)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error))
    }

    update = () => {
      const id = "2";
      const data:UpdateUser = {
        name: "jose gregorio",
      };

      this.usersService.update(id, data)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error))
    }

    remove = () => {
      const id = "2";

      this.usersService.remove(id)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error));
    }
}

(async () => {
    const usersService = new UsersServices();
    const userController = new UsersController(usersService);
    console.log( userController.remove() )
    console.log( userController.findAll() )
})()