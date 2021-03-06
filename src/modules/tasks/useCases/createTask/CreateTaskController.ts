import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, user_id } = request.body;

        const createTaskUseCase = container.resolve(CreateTaskUseCase);
        const task = await createTaskUseCase.execute({name, description, user_id});
        return response.status(201).json(task);
    }
}

export { CreateTaskController }