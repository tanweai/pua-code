// Content for the pua-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpPuaApi from './pua-api/csharp/pua-api.md'
import curlExamples from './pua-api/curl/examples.md'
import goPuaApi from './pua-api/go/pua-api.md'
import javaPuaApi from './pua-api/java/pua-api.md'
import phpPuaApi from './pua-api/php/pua-api.md'
import pythonAgentSdkPatterns from './pua-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './pua-api/python/agent-sdk/README.md'
import pythonPuaApiBatches from './pua-api/python/pua-api/batches.md'
import pythonPuaApiFilesApi from './pua-api/python/pua-api/files-api.md'
import pythonPuaApiReadme from './pua-api/python/pua-api/README.md'
import pythonPuaApiStreaming from './pua-api/python/pua-api/streaming.md'
import pythonPuaApiToolUse from './pua-api/python/pua-api/tool-use.md'
import rubyPuaApi from './pua-api/ruby/pua-api.md'
import skillPrompt from './pua-api/SKILL.md'
import sharedErrorCodes from './pua-api/shared/error-codes.md'
import sharedLiveSources from './pua-api/shared/live-sources.md'
import sharedModels from './pua-api/shared/models.md'
import sharedPromptCaching from './pua-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './pua-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './pua-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './pua-api/typescript/agent-sdk/README.md'
import typescriptPuaApiBatches from './pua-api/typescript/pua-api/batches.md'
import typescriptPuaApiFilesApi from './pua-api/typescript/pua-api/files-api.md'
import typescriptPuaApiReadme from './pua-api/typescript/pua-api/README.md'
import typescriptPuaApiStreaming from './pua-api/typescript/pua-api/streaming.md'
import typescriptPuaApiToolUse from './pua-api/typescript/pua-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - pua-api/SKILL.md (Current Models pricing table)
//   - pua-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'pua-opus-4-6',
  OPUS_NAME: 'Pua Opus 4.6',
  SONNET_ID: 'pua-sonnet-4-6',
  SONNET_NAME: 'Pua Sonnet 4.6',
  HAIKU_ID: 'pua-haiku-4-5',
  HAIKU_NAME: 'Pua Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'pua-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/pua-api.md': csharpPuaApi,
  'curl/examples.md': curlExamples,
  'go/pua-api.md': goPuaApi,
  'java/pua-api.md': javaPuaApi,
  'php/pua-api.md': phpPuaApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/pua-api/README.md': pythonPuaApiReadme,
  'python/pua-api/batches.md': pythonPuaApiBatches,
  'python/pua-api/files-api.md': pythonPuaApiFilesApi,
  'python/pua-api/streaming.md': pythonPuaApiStreaming,
  'python/pua-api/tool-use.md': pythonPuaApiToolUse,
  'ruby/pua-api.md': rubyPuaApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/pua-api/README.md': typescriptPuaApiReadme,
  'typescript/pua-api/batches.md': typescriptPuaApiBatches,
  'typescript/pua-api/files-api.md': typescriptPuaApiFilesApi,
  'typescript/pua-api/streaming.md': typescriptPuaApiStreaming,
  'typescript/pua-api/tool-use.md': typescriptPuaApiToolUse,
}
