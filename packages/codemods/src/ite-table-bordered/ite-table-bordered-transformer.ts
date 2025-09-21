import type { FileInfo } from 'jscodeshift'

export default function transformer(file: FileInfo) {
  if (!file.path.endsWith('.vue')) {
    return file.source
  }

  let source = file.source

  const iteTableRegex = [
    /<ite-table(?!-)([\s\S]*?)>/g,
    /<IteTable(?!-)([\s\S]*?)>/g,
  ]

  for (const regex of iteTableRegex) {
    source = source.replace(regex, (tagMatch) => {
      // удаляем bordered
      if (tagMatch.includes('bordered')) {
        return tagMatch.replace(/\s+bordered\b/g, '')
      }

      // если нету bordered, добавляем borderless
      return tagMatch.replace(/\/>$/, ' borderless />')
    })
  }

  return source
}
