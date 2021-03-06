import './foundation/threading/promise-pal';

import {
    CancellationTokenSource,
    PromiseCompletionSource,
    CancellationToken,
    TimeSpan,
    Timeout
} from './foundation/threading';

import {
    __hasCancellationToken__, __returns__, __endpoint__,
    RemoteError,
    IpcClient,
    Message
} from './core/surface';

import { IPipeClientStream } from './foundation/pipes';
import { OperationCanceledError, ObjectDisposedError } from './foundation/errors';
import { WireError as IpcError } from './core/internals';
import { Trace } from './foundation/utils';
import { IDisposable } from './foundation/disposable';

export {
    CancellationToken,
    CancellationTokenSource,
    PromiseCompletionSource,
    IPipeClientStream,
    IpcClient,
    Message,
    TimeSpan,
    Timeout,
    RemoteError,
    IpcError,
    ObjectDisposedError,
    OperationCanceledError,
    IDisposable,
    __hasCancellationToken__,
    __returns__,
    __endpoint__,
    Trace
};
