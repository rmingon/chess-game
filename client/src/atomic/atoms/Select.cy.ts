import Select from './Select.vue'

describe('<Select />', () => {
  it('renders', async () => {
    const spy = cy.spy()
    cy.mount(Select, {
      props: {
        list: ['car', 'truck', 'plane'],
      },
      listeners: {
        'changed': spy
      }
    })
    cy.get('select').select('truck')
    await cy.expect(spy).to.be.calledOnce
  })
})