export const SettingsButtonsGroups = [
  [
    'hideSidebar',
  ],
  [
    'folderUnion',
    'folder',
    'fileUnion',
    'file',
    'exclude',
    'magic',
  ],
  [
    'showFreq'
  ],
  [
    'showThumbnails',
    'showFilmstrip',
    'showFiles',
  ],
  [
    'makeSmaller',
    'makeLarger',
  ],
  [
    'darkMode',
  ],
  [
    'showMoreInfo',
    'fontSizeLarger',
    'hoverDisabled',
    'randomImage'
  ],
  [
    'hideTop',
    'flatIcons'
  ]
];

// correspond to each group above
export const SettingsCategories = [
  'Search & filter settings',
  '',
  '',
  'Gallery & view settings',
  '',
  '',
  '',
  'Other settings'
]

export let SettingsButtons = {
  'showThumbnails': {
    hidden: false,
    toggled: true,
    iconName: 'icon-show-thumbnails',
    title: 'Show thumbnails',
    description: 'Show thumbnails view',
  },
  'showFilmstrip': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-filmstrip',
    title: 'Show filmstrip',
    description: 'Show filmstrip view'
  },
  'showFiles': {
    hidden: false,
    toggled: false,
    iconName: 'icon-show-filenames',
    title: 'Show files',
    description: 'Show files view',
  },
  'showMoreInfo': {
    hidden: false,
    toggled: true,
    iconName: 'icon-tag',
    title: 'Show more info',
    description: 'Show more info'
  },
  'fontSizeLarger': {
    hidden: false,
    toggled: false,
    iconName: 'icon-video-blank',
    title: 'Toggle font size',
    description: 'Make the font larger or smaller'
  },
  'hoverDisabled': {
    hidden: false,
    toggled: false,
    iconName: 'icon-toggle-scrub',
    title: 'Toggle hover animations',
    description: 'Scrolling over preview shows different screenshots'
  },
  'randomImage': {
    hidden: false,
    toggled: true,
    iconName: 'icon-video-blank',
    title: 'Show random screenshot',
    description: 'Show random screenshot in the preview'
  },
  'makeSmaller': {
    hidden: false,
    toggled: false,
    iconName: 'icon-minus',
    title: 'Decrease preview size',
    description: 'Decrease preview size'
  },
  'makeLarger': {
    hidden: false,
    toggled: false,
    iconName: 'icon-plus',
    title: 'Increase preview size',
    description: 'Increase preview size'
  },
  'darkMode': {
    hidden: false,
    toggled: false,
    iconName: 'icon-darken',
    title: 'Dark mode',
    description: 'Dark mode'
  },
  'folderUnion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-folder-plus',
    title: 'Folder union search',
    description: 'Search in all folders containing any of the search words'
  },
  'folder': {
    hidden: false,
    toggled: false,
    iconName: 'icon-folder-plus',
    title: 'Folder search',
    description: 'Search in folders containing each of the search words'
  },
  'fileUnion': {
    hidden: true,
    toggled: false,
    iconName: 'icon-video-plus',
    title: 'Video union search',
    description: 'Search for videos containing any of the search words'
  },
  'file': {
    hidden: false,
    toggled: true,
    iconName: 'icon-video-blank',
    title: 'Video search',
    description: 'Search for videos containing each of the search words'
  },
  'exclude': {
    hidden: false,
    toggled: true,
    iconName: 'icon-video-x',
    title: 'Exclude filter',
    description: 'Exclude any files that contain this string'
  },
  'magic': {
    hidden: false,
    toggled: true,
    iconName: 'icon-looking-glass',
    title: 'Magic search',
    description: 'Live search showing all files and files inside folders that contain search words'
  },
  'showFreq': {
    hidden: false,
    toggled: true,
    iconName: 'icon-cloud',
    title: 'Word cloud',
    description: 'Show the nine most frequent words in current file names'
  },
  'hideSidebar': {
    hidden: false,
    toggled: false,
    iconName: 'icon-video-blank',
    title: 'Hide sidebar',
    description: 'Hides the search filter sidebar'
  },
  'hideTop': {
    hidden: false,
    toggled: false,
    iconName: 'icon-video-blank',
    title: 'Hide top',
    description: 'Hide the top bar'
  },
  'flatIcons': {
    hidden: false,
    toggled: false,
    iconName: 'icon-checkmark', // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'Flat icons',
    description: 'Flat icon style'
  }
}
