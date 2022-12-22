import Select from './Select.vue'

describe('<Select />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Select, {
      props: {
        list: ['car', 'truck', 'plane']
      }
    })
    cy.get('select').select('car')
    // cy.get('@change').should('have.been.calledWith', 1)
  })
})