import { ITasksRepository } from "../src/modules/tasks/repositories/ITasksRepository";
import { TasksRepositoryMock } from "../src/modules/tasks/repositories/mocks/TasksRepositoryMock";
import { CreateTaskUseCase } from "../src/modules/tasks/useCases/createTask/CreateTaskUseCase";

let createTaskUseCase: CreateTaskUseCase;
let tasksRepository: ITasksRepository;

const mockUserAccount = () => ({ id: "huasahush" });

describe("CreateTask", () => {
    beforeEach(() => {
        tasksRepository = new TasksRepositoryMock();
        createTaskUseCase = new CreateTaskUseCase(tasksRepository);
    });

    it("should be able to create a new task", async () => {
        const mockUser = mockUserAccount();
        const task = await createTaskUseCase.execute({
            name: "Fazer ovo",
            description: "Fazer ovo com bastante sal",
            user_id: mockUser.id
        });

        expect(task).toHaveProperty("id");
    });
});