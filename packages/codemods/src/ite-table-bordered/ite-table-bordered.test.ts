import { expect, it } from 'vitest'
import { readFixtures } from '../utils'
import tranformer from './ite-table-bordered-transformer'

const fixtures = await readFixtures('ite-table-bordered')

it.each(fixtures)('ite-table-bordered($name)', (fixture) => {
  const output = tranformer(fixture)
  expect(output).toMatchSnapshot()
})
