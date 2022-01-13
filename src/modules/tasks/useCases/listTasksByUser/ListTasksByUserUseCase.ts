import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class ListTasksByUserUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository
    ) { }

    async execute(user_id: string): Promise<Task[]> {
        const tasks = await this.tasksRepository.findByUser(user_id);
        return tasks;
    }
}

export { ListTasksByUserUseCase }