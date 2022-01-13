import { v4 as uuidv4 } from "uuid";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("tasks")
class Task {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    done?: boolean

    @Column()
    user_id: string;

    constructor() {
        if (!this.id)  {
            this.id = uuidv4();
            this.done = false;
        }
    }
}

export { Task }