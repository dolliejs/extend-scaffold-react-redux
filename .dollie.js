module.exports = {
  installers: [],
  files: {
    add: [
      'src/store/**/*.{js,ts}',
    ],
    merge: [
      'src/App.{js,tsx}',
      'src/index.{js,tsx}',
      'package.json',
    ],
  },
  endScripts: [
    (context) => {
      if (context.fs.exists('tsconfig.json')) {
        [
          'src/store/models/app.js',
          'src/store/index.js',
        ].forEach((pathname) => context.fs.remove(pathname));
      } else {
        [
          'src/store/models/app.ts',
          'src/store/index.ts',
        ].forEach((pathname) => context.fs.remove(pathname));
      }
    },
  ],
};
