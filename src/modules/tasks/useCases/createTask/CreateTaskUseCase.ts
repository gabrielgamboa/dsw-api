import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class CreateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository,
    ) {}

    async execute({name, description, user_id}: ICreateTaskDTO): Promise<Task> {
        const task = await this.tasksRepository.create({name, description, user_id});
        return task;
    }
}

export { CreateTaskUseCase }