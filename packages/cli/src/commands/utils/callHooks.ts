import { applyAsyncHooks, requireHooks } from '@docusaurus-tde/di'

export const callHooks = async ({ hooks = [] }: Record<string, any>, type: 'before' | 'after'): Promise<void> => {
  await applyAsyncHooks(requireHooks(hooks), type)
}
