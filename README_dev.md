## Development

### Add your command

1. Write `src/tools/*.ts`
2. Add `src/tools/index.ts`
3. Add your command to `contributes.commands` in package.json
4. Add your install infomation to `src/goToolsInformation.ts`

### movie
ffmpeg -i a.mov -vf scale=640:-1 -r 10 1.gif

### Publish
npm run package

Login as shiba6v and upload the package.
https://marketplace.visualstudio.com/manage/publishers/shiba6v