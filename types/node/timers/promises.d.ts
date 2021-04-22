declare module 'timers/promises' {
    export * from 'node:timers/promises';
}

declare module 'node:timers/promises' {
    function setTimeout(ms: number): Promise<void>;
}
