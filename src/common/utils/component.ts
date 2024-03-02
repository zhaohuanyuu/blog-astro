type Simplify<T> = T extends any ? {
  [K in keyof T]: T[K];
} : T;
type DistributeOverride<T, F> = T extends undefined ? F : T;
type Override<T, U> = T extends any ? U extends any ? {
  [K in keyof T]: K extends keyof U ? DistributeOverride<U[K], T[K]> : T[K];
} & {
  [K in keyof U]: K extends keyof T ? DistributeOverride<U[K], T[K]> : U[K];
} : T & U : T & U;
type _MergeProps<T extends unknown[], Curr = {}> = T extends [
  infer Next | (() => infer Next),
  ...infer Rest
] ? _MergeProps<Rest, Override<Curr, Next>> : T extends [...infer Rest, infer Next | (() => infer Next)] ? Override<_MergeProps<Rest, Curr>, Next> : T extends [] ? Curr : T extends (infer I | (() => infer I))[] ? OverrideSpread<Curr, I> : Curr;

export type MergeProps<T extends unknown[]> = Simplify<_MergeProps<T>>;
