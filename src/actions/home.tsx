export enum ActionTypes {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
}

export interface Action {
    type: ActionTypes
}

export function increment(): Action {
  return {
    type: ActionTypes.INCREMENT_COUNTER
  }
}

export function decrement(): Action {
  return {
    type: ActionTypes.DECREMENT_COUNTER
  }
}

export async function asyncIncrement(): Promise<any> {
  await new Promise((done) => setTimeout(done, 1000))
  return increment();
}
