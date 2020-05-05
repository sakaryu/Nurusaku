import { mount } from '@vue/test-utils'
import FormCard from '@/components/FormCard.vue'

describe('FormCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
