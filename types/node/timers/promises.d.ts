declare module 'node:timers/promises' {
    export * from 'timers/promises';
}

declare module 'timers/promises' {
    import { TimerOptions } from 'node:timers';

    /**
     * Returns a promise that resolves after the specified delay in milliseconds.
     */
    function setTimeout<T>(delay: number, value?: T, options?: TimerOptions): Promise<T>;

    /**
     * Returns a promise that resolves in the next tick.
     */
    function setImmediate<T>(value: T, options?: TimerOptions): Promise<T>;

    /**
     * Returns an async iterator that generates values in an interval of delay ms.
     */
    function setInterval<T>(delay: number, value?: T, options?: TimerOptions): Promise<T>;
}
