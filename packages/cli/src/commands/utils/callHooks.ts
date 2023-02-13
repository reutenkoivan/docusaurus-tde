import { applyAsyncHooks, requireHooks } from '@pwa-doc/di'

export const callHooks = async ({ hooks = [] }: Record<string, any>, type: 'before' | 'after'): Promise<void> => {
  await applyAsyncHooks(requireHooks(hooks), type)
}
