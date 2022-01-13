import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  removeById(id: string): Promise<void>;
  findByCpf(cpf: string): Promise<User>;
}

export { IUsersRepository }

