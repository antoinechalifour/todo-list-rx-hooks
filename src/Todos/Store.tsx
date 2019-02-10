import { Subject, combineLatest, Observable } from "rxjs";
import { filter, scan, take, tap } from "rxjs/operators";

import { logReducer } from "../helpers/decorators/logReducer";
import { Todo, Action, TodoStore } from "./types";
import { todoReducer } from "./reducer";

const initialState: Todo[] = [];

const configureState = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(x => x.type !== "SUBMIT"),
    scan<Action, Todo[]>(
      (state, action) => logReducer(todoReducer)(state, action),
      initialState
    )
  );

const configureSubmit = (
  state$: Observable<Todo[]>,
  actions$: Observable<Action>
) =>
  combineLatest(
    state$,
    actions$.pipe(
      filter(x => x.type === "SUBMIT"),
      tap(() => console.log("After filter"))
    )
  ).pipe(
    take(1),
    tap(() => console.log("After take"))
  );

export default function Store(): TodoStore {
  const actions$ = new Subject<Action>();
  const state$ = configureState(actions$);
  const submit$ = configureSubmit(state$, actions$);

  submit$.subscribe(null, null, () =>
    alert("thanks for submitting your todo list")
  );

  return {
    state$,
    create(text) {
      actions$.next({
        type: "ADD_TODO",
        text
      });
    },
    delete(id) {
      actions$.next({
        type: "DELETE_TODO",
        todoId: id
      });
    },
    setAsComplete(id) {
      actions$.next({
        type: "SET_TODO_COMPLETED",
        todoId: id
      });
    },
    setAsDoing(id) {
      actions$.next({
        type: "SET_TODO_DOING",
        todoId: id
      });
    },
    submit() {
      actions$.next({ type: "SUBMIT" });
    }
  };
}
