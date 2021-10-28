type PlatformKeys = {
  [key: string]: string[]
};

const validKeysPerPlatform: PlatformKeys = {
  'windows': [
    'ASDF-ASDF',
    'WINA-CTVK',
  ],
  'ios': [
    'IOSA-CTVK',
  ],
  'android': [
    'ANDR-ACTV',
  ],
};

export default validKeysPerPlatform;