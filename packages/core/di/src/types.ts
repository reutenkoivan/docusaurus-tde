import type glob from 'glob'
import type lodash from 'lodash'
import type fetch from 'node-fetch'
import type docusaurusTypes from '@docusaurus/types'
import type { Signales } from 'signales'
import type { Constants, copyFile, mkdir, writeFile } from '@docusaurus-tde/utils'

/* Context */

export type DefaultContextType = {
  utils: {
    copyFile: typeof copyFile;
    mkdir: typeof mkdir;
    writeFile: typeof writeFile;
    lodash: typeof lodash;
    glob: typeof glob;
  };
  constants: Constants;
}

export type ContextType = {
  utils: {
    copyFile: typeof copyFile;
    mkdir: typeof mkdir;
    writeFile: typeof writeFile;
    lodash: typeof lodash;
    glob: typeof glob;
  };
  logger: typeof Signales;
  constants: Constants;
}

export type AsyncContextType = ContextType & {
  utils: {
    fetch: typeof fetch;
  };
}

/* Hook functions */

export type AsyncHookType = (_props: Record<string, any>, _context: AsyncContextType) => void | Promise<void>

export type RuntimeHookType = (
  _config: docusaurusTypes.Config,
  _di: { props: Record<string, any>; context: ContextType}
) => docusaurusTypes.Config


/* Hooks contracts */

export type HookContractType = {
  name: string;
  version: string;
  before?: Array<AsyncHookType>;
  runtime?: Array<RuntimeHookType>;
  after?: Array<AsyncHookType>;
}

export type FilledHookContractType = {
  name: string;
  version: string;
  props: Record<string, any>;
  before: Array<AsyncHookType>;
  runtime: Array<RuntimeHookType>;
  after: Array<AsyncHookType>;
}

export type DocusaurusConfigType = docusaurusTypes.Config
