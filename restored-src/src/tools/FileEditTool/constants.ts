// In its own file to avoid circular dependencies
export const FILE_EDIT_TOOL_NAME = 'Edit'

// Permission pattern for granting session-level access to the project's .pua/ folder
export const PUA_FOLDER_PERMISSION_PATTERN = '/.pua/**'

// Permission pattern for granting session-level access to the global ~/.pua/ folder
export const GLOBAL_PUA_FOLDER_PERMISSION_PATTERN = '~/.pua/**'

export const FILE_UNEXPECTEDLY_MODIFIED_ERROR =
  'File has been unexpectedly modified. Read it again before attempting to write it.'
