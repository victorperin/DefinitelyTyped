import * as promises from 'node:timers/promises';

{
    // $ExpectType Promise<void>
    promises.setTimeout(1000);
}
