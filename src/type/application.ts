import { User } from "./user";

type ApplicationState = {
    user: User;
}

type Breakpoint = "small" | "medium" | "large";


export type { ApplicationState, Breakpoint }