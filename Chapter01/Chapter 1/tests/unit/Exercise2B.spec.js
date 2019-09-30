import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2B.vue'

describe('Exercise2B.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'My first component!'
    const wrapper = shallowMount(Exercise, {
      propsData: { title },
    })

    wrapper.setData({ isUppercase: false, title: title })

    expect(wrapper.text()).toMatch(title)
  })

  it('renders props.title in capitals when isUppercase equals true', () => {
    const title = 'MY FIRST COMPONENT!'
    const wrapper = shallowMount(Exercise, {
      propsData: { title },
    })

    wrapper.setData({ isUppercase: true, title: title })

    expect(wrapper.text()).toMatch(title)
  })
})
