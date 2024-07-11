/* eslint-disable ts/ban-ts-comment */
import { addons, makeDecorator } from '@storybook/preview-api'
import dedent from 'dedent'
import { h, onMounted, watch } from 'vue'

export const templateDecorator = makeDecorator({
  name: 'template-decorator',
  parameterName: 'template-decorator',
  wrapper: (storyFn, context) => {
    const story = storyFn(context)

    return {
      components: { story },
      setup() {
        onMounted(() => {
          setSourceCode()
        })

        watch(context.args, () => {
          setSourceCode()
        })

        function setSourceCode() {
          try {
            // @ts-expect-error
            const src = context.originalStoryFn(context.args).template
            const code = dedent(formatTemplate(src, context.args))
            const channel = addons.getChannel()

            channel.emit('storybook/docs/snippet-rendered', {
              id: context.id,
              args: context.args,
              source: code,
            })
          } catch (e) {
            console.warn('Failed to render code', e)
          }
        }

        // @ts-expect-error
        return () => h(story)
      },
    }
  },
})

function propToSource(key: string, value: string): string {
  const type = typeof value
  switch (type) {
    case 'boolean':
      return value ? key : ''
    case 'string':
      return `${key}="${value}"`
    case 'object':
      return `${key}="${JSON.stringify(value).replace(/"(\w+)"\s*:/g, '$1:').replaceAll('"', '\'')}"`
    default:
      return `:${key}="${value}"`
  }
}

function formatTemplate(template: string, args: any, replacing = 'v-bind="args"') {
  const code = template.replace(
    replacing,
    Object.keys(args)
      .map((key) => propToSource(key, args[key]))
      .join(' '),
  )

  return code
}
