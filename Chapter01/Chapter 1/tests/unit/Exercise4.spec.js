import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise4.vue'

describe('Exercise4.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'My list component!'
    const subtitle = 'A subtitle'
    const wrapper = shallowMount(Exercise, {})

    wrapper.setData({ subtitle: subtitle, title: title })

    expect(wrapper.find('h1').text()).toMatch(title)
    expect(wrapper.find('h2').text()).toMatch(subtitle)
  })
})
